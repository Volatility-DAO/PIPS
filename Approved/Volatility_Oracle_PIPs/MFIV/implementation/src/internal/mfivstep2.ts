import dayjs from "dayjs"
import Duration from "dayjs/plugin/duration"
import utc from "dayjs/plugin/utc"
import { YEAR_IN_MILLISECONDS } from "../constants"
import { insufficientData } from "../error"
import { MfivOptionPair } from "../models/mfivoptionpair"
import { OptionPair } from "../models/optionpair"
import { Expiries, MfivOptionSummary, MfivStep2Terms, OptionSummary } from "../types"
import { MfivStepInput } from "./mfivstep1"

dayjs.extend(utc)
dayjs.extend(Duration)

/***************************************************************************************************************************\
*                                                                                                                           *
* 2. Separately, for both the set of near-expiration options and next-expiration options:                                   *
*                                                                                                                           *
*    (a) Determine the forward strike K∗. This is defined as the strike for which the prices for the call                   *
*        and put options at that strike have the smallest absolute difference among all the pairs of options.               *
*                                                                                                                           *
*    (b) Determine the forward level:                                                                                       *
*                                                                                                                           *
*        ┌─────────────────────forward strike K∗                                                                            *
*        │                                                                                                                  *
*        │         ┌───────────C∗ is the price for the call option with strike K∗.                                          *
*        │         │                                                                                                        *
*        │         │    ┌──────P∗ is the price for the put options with strike K∗.                                          *
*        │         │    │                                                                                                   *
*        │         │    │                                                                                                   *
*        ▼         ▼    ▼                                                                                                   *
*    F = K∗ + eᴿᵀ (C∗ − P∗)                                                                                                 *
*              ▲▲                                                                                                           *
*              │└──────T is the time to expiration in years.                                                                *
*              └───────R is the annual risk-free interest rate.                                                             *
*                                                                                                                           *
*   (c) Determine the at-the-money strike price K0. This is defined as the greatest strike price less                       *
*       than or equal to the forward level F .                                                                              *
*                                                                                                                           *
*   (d) Take the midpoint prices of all put options with strike less than K0, the midpoint prices of all the                *
*       call options with strike greater than K0, and the average of the midpoint prices of the two options                 *
*       at the strike K0. We call this subset of options the admitted options and the midpoints we designate                *
*       as Q(K) for each admitted option at strike K.                                                                       *
*                                                                                                                           *
*   (e) We now calculate σ2 defined as:                                                                                     *
*                                                                                                                           *
*                 _____                                                                                                     *
*            RT   ╲     Δ ⋅ K                         2                                                                     *
*      2   2e      ╲         i            1   ⎛ F    ⎞                                                                      *
*     σ  = ──── ⋅   ╲   ────── ⋅ Q ⎛K ⎞ - ─ ⋅ ⎜── - 1⎟                                                                      *
*            T      ╱      2       ⎝ i⎠   T   ⎜K     ⎟                                                                      *
*                  ╱      K                   ⎝ 0    ⎠                                                                      *
*                 ╱        i                                                                                                *
*                 ‾‾‾‾‾                                                                                                     *
*                   i                                                                                                       *
*                                                                                                                           *
*       where:                                                                                                              *
*        • The sum is over all admitted options.                                                                            *
*        • Q(Ki) is the midpoint price for option with strike Ki.                                                           *
*        • ∆Ki is half the difference between the strikes on either side of Ki unless Ki is the least or                    *
*          greatest admitted strike in which case ∆Ki is the difference between the adjacent strike.                        *
*        • As defined previously, T, R, F, K0 are time to expiration, risk- free interest rate, the                         *
*          forward level, and the at-the-money strike respectively.                                                         *
*                                                                                                                           *
* 3. Take the weighted average of the values σ12 and σ2 obtained in Step 2 above for the near-expiration                    *
* options and the next-expiration options:                                                                                  *
*                                                                                                                           *
*                          _____________________________________________________                                            *
*                         ╱⎛          ⎛T  - T  ⎞             ⎛T   - T ⎞⎞                                                    *
*                        ╱ ⎜      2   ⎜ 2    14⎟         2   ⎜ 14    1⎟⎟   ⎛365⎞                                            *
*     volEth = 100 ⋅    ╱  ⎜T  ⋅ σ  ⋅ ⎜────────⎟ + T  ⋅ σ  ⋅ ⎜────────⎟⎟ ⋅ ⎜───⎟                                            *
*                      ╱   ⎜ 1    1   ⎜ T  - T ⎟    2    2   ⎜ T  - T ⎟⎟   ⎝14 ⎠                                            *
*                    ╲╱    ⎝          ⎝  2    1⎠             ⎝  2    1⎠⎠                                                    *
*                                                                                                                           *
*                                                                                                                           *
*       where:                                                                                                              *
*        • T1 and T2 are times until near and next expiration in (fractional) years.                                        *
*        • T14 = 14/365                                                                                                     *
*                                                                                                                           *
* We now describe two details regarding the above definition.                                                               *
*                                                                                                                           *
* 1. All midpoint values are defined as being the mean of the least ask price and the greatest bid price. If a bid price    *
* is zero then remove this option from all further calculations. If there is a non-zero bid price and no ask price the      *
* mark price is used in place of the midpoint. If the midpoint is 1.5x greater than the mark price then the mark price is   *
* used in place of the midpoint.                                                                                            *
*                                                                                                                           *
* 2. In step 1c above, in the rare case there is only one valid option price with strike K0, either call or put, use the    *
* price of the single available option in place of the average. In the even more rare case where neither the put option     *
* price nor the call option price with strike K0 are valid then the index is undefined. By arbitrage, both of these         *
* situations are very short-lived.                                                                                          *
*                                                                                                                           *
*                                                                                                                           *
\***************************************************************************************************************************/
export class MfivStep2 {
  /**
   *
   * @param ctx - Context object containing the R and T values for step 2b
   * @param params - MfivParams object
   * @param expiries - options partitioned into near and next expiries
   */
  run({
    context,
    params,
    expiries
  }: MfivStepInput & {
    expiries: Expiries<MfivOptionSummary>
  }) {
    const risklessRate = context.risklessRate
    const nowEpoch = dayjs.utc(params.at).valueOf() // new Date(params.at).getTime()
    const forwardLevelOptions = { risklessRate, nowEpoch }
    const nearPairs = Array.from(expiries.nearOptionPairMap.values())
    const nextPairs = Array.from(expiries.nextOptionPairMap.values())
    const NT1 = dayjs.utc(params.nearDate).valueOf() - nowEpoch //new Date(params.nearDate).getTime() - nowEpoch
    const NT2 = dayjs.utc(params.nextDate).valueOf() - nowEpoch //new Date(params.nextDate).getTime() - nowEpoch
    const N14 = dayjs.duration({ weeks: 2 }).asMilliseconds()
    const N365 = dayjs.duration({ years: 1 }).asMilliseconds()
    const T1 = NT1 / N365
    const T2 = NT2 / N365
    const FS1 = this.forwardStrike(nearPairs)
    const FS2 = this.forwardStrike(nextPairs)
    const F1 = this.forwardLevel(forwardLevelOptions, FS1)
    const F2 = this.forwardLevel(forwardLevelOptions, FS2)
    const nearForwardStrike = this.atTheMoneyStrikePrice(expiries.nearBook, F1)
    const nextForwardStrike = this.atTheMoneyStrikePrice(expiries.nextBook, F2)
    const nearFinalBook = finalBookGet(expiries.nearBook, nearForwardStrike)
    const nextFinalBook = finalBookGet(expiries.nextBook, nextForwardStrike)
    const nearContribution = contributionGet(nearFinalBook)
    const nextContribution = contributionGet(nextFinalBook)
    const nearModSigmaSquared = Math.E ** (risklessRate * T1) * 2 * nearContribution - (F1 / nearForwardStrike - 1) ** 2
    const nextModSigmaSquared = Math.E ** (risklessRate * T2) * 2 * nextContribution - (F2 / nextForwardStrike - 1) ** 2
    return {
      finalNearBook: nearFinalBook,
      finalNextBook: nextFinalBook,
      NT1,
      NT2,
      N14,
      N365,
      T1,
      T2,
      FS1: FS1.strikePrice,
      FS2: FS2.strikePrice,
      F1,
      F2,
      nearForwardStrike,
      nextForwardStrike,
      nearContribution,
      nextContribution,
      nearModSigmaSquared,
      nextModSigmaSquared
    } as MfivStep2Terms
  }

  /**
   * (step 2a) Determine the forward strike K*
   *
   * This is defined as the strike for which the prices for the call and put
   * options at that strike have the smallest absolute difference among all the pairs
   * of options.
   *
   * @returns OptionPair or undefined if not enough data is present
   *
   * @throws {@link Failure<VolatilityError.InsufficientData>}
   */
  forwardStrike(options: OptionPair<MfivOptionSummary>[]) {
    const strike = this.strikeWithSmallestDiff(options)

    if (!strike) {
      throw insufficientData("No forward price. Should occur at burn-in only!")
    }

    return strike
  }

  /**
   * (step 2b) Determine the forward level: F = K* + e^(RT) ∙ (C* - P*)
   *
   * @returns number
   */
  forwardLevel({ risklessRate, nowEpoch }: { risklessRate: number; nowEpoch: number }, forwardStrike: MfivOptionPair) {
    // forward strike price
    const kStar = forwardStrike.strikePrice
    // price for the call option with strike K∗
    const cStar = forwardStrike.$call as number
    // price for the put options with strike K∗
    const pStar = forwardStrike.$put as number
    // annual risk-free interest rate.
    const R = risklessRate
    // time to expiration in years
    const T = (forwardStrike.expirationDate.valueOf() - nowEpoch) / YEAR_IN_MILLISECONDS

    return kStar + Math.E ** (R * T) * (cStar - pStar)
  }

  /**
   * (step 2c) Determine at-the-money strike price K0.
   *
   * This is defined as the greatest strike price less than or equal to the forward level F
   *
   * @returns number
   */
  atTheMoneyStrikePrice(options: MfivOptionSummary[], forwardLevelPrice: number) {
    return options.reduce((adjacentStrike: number, current: MfivOptionSummary) => {
      if (current.strikePrice <= forwardLevelPrice && current.strikePrice > adjacentStrike) {
        adjacentStrike = current.strikePrice
      }

      return adjacentStrike
    }, 0.0)
  }

  /**
   * (step 2a continued)
   *
   * @returns OptionPricePair (options strike) with the smallest absolute difference among all the option pairs
   * @private
   */
  private strikeWithSmallestDiff(optionPairs: MfivOptionPair[]) {
    return optionPairs.reduce((previous, current) => {
      const cDiff = current.diff(),
        pDiff = previous.diff()

      if (isNaN(pDiff) && !isNaN(cDiff)) {
        return current
      } else if (pDiff && isNaN(cDiff)) {
        return previous
      } else {
        return pDiff < cDiff ? previous : current
      }
    })
  }
}

const isCallOption = (o: { optionType: "call" | "put" }) => o.optionType === "call"
const isPutOption = (o: { optionType: "call" | "put" }) => o.optionType === "put"
const isPutBelowStrike = (targetStrike: number) => (o: OptionSummary) => isPutOption(o) && o.strikePrice < targetStrike
const isCallAboveStrike = (targetStrike: number) => (o: OptionSummary) =>
  isCallOption(o) && o.strikePrice > targetStrike

const finalBookGet = (entries: MfivOptionSummary[], targetStrike: number) => {
  const final = entries.reduce(
    (acc, option) => {
      // find the puts below the strike, the calls above the strike, and both the put and call AT the strike
      if (isPutBelowStrike(targetStrike)(option) || isCallAboveStrike(targetStrike)(option)) {
        acc.book.push([option.symbol, option])
      } else if (option.strikePrice === targetStrike) {
        acc.avg.push([option.symbol, option])
      }

      return acc
    },
    { avg: [] as [string, MfivOptionSummary][], book: [] as [string, MfivOptionSummary][] }
  )

  // add to the list the average of the call and put prices at the strike
  const avgOption = {
    ...final.avg[0][1],
    optionPrice: (final.avg[0][1].optionPrice + final.avg[1][1].optionPrice) / 2
  }

  final.book.push([avgOption.symbol + "AV", avgOption])

  // sort by strike price
  return final.book.sort((a, b) => {
    return a[1].strikePrice - b[1].strikePrice
  })
}

const contributionGet = (finalBook: [string, MfivOptionSummary][]) => {
  let thisStrike: number, nextStrike: number, previousStrike: number, deltaK: number, thisPrice: number
  let contribution = 0

  finalBook.forEach((value, idx, arr) => {
    thisStrike = Number(value[1].strikePrice)
    thisPrice = value[1].optionPrice ?? 0

    if (idx === 0) {
      nextStrike = Number(arr[idx + 1][1].strikePrice)
      deltaK = nextStrike - thisStrike
    } else if (idx === arr.length - 1) {
      previousStrike = Number(arr[idx - 1][1].strikePrice)
      deltaK = thisStrike - previousStrike
    } else {
      previousStrike = Number(arr[idx - 1][1].strikePrice)
      nextStrike = Number(arr[idx + 1][1].strikePrice)
      deltaK = (nextStrike - previousStrike) / 2
    }

    contribution = contribution + (deltaK / thisStrike ** 2) * thisPrice
  })

  return contribution
}
