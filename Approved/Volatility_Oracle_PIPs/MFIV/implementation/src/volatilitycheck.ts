import { unsupportedMethodology } from "./error"
import { compute } from "./mfiv"
import { MfivContext, MfivEvidence, MfivParams, MfivResult } from "./types"

export class VolatilityCheck {
  /**
   * Returns whether or not the given mfiv inputs match an expected result by
   * comparing the output of the computed index value to `example.result`
   *
   * @param example - The mfiv data that produced `example.result`
   * @returns A boolean indicating whether `example.result` matches the index
   *          value computed given `example.params`
   *
   * @throws unsupportedMethodology
   * This exception is thrown when the example contains an unsupported methodology.
   *
   */
  static isValid(example: MfivEvidence): boolean {
    return VolatilityCheck.check(example).isSuccess
  }

  static check(example: MfivEvidence): { isSuccess: boolean; result: MfivResult } {
    const evidenceResult = example.result
    const compare = (result: MfivResult) =>
      result.dVol === evidenceResult.dVol && result.invdVol === evidenceResult.invdVol
    const result = this._compute({ ...example })
    return { isSuccess: compare(result), result: result }
  }

  private static _compute({ context, params }: { context: MfivContext; params: MfivParams }) {
    switch (context.methodology) {
      case "mfiv": {
        return compute(context, params)
      }
      default: {
        throw unsupportedMethodology(context.methodology)
      }
    }
  }
}
