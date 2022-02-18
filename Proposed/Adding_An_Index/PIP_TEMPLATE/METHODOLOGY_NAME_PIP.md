# PIP Parameters

When an index is added to The Volatility Oracle, the following parameters need to be set.

## How to set the target frequency for your audit.

It is beneficial to understand how `drop` and `data period` are used in combination to set the frequency of how often an index is audited. 
Drop represents the number of reward tokens that are accrued each second. These reward tokens incentivize a user to pay the transaction cost of the audit. This is covered in depth in the Reward Section of the official documentation. For now, all that is needed is a cursory understanding that rewards accrue each second and are given to a user when they pay the transaction cost. You should try to set the drop parameter so that the total amount of rewards accrued overcome the transaction cost at the target frequency. For example, if audits are desired every five minutes, the average value of accrued drops should overcome the cost of transacting at five minutes.

Data period represents the time period at which snapshots of input data & index values are saved to an open-source database (e.g. IPFS). Only the most recent snapshot can be relayed to The Volatility Oracle for audit and it can only be audited once, subsequent submissions of the same snapshot to The Volatility Oracle are denied. Data period can be set to any time resolution (e.g. 1 second or 1 hour) but should never be greater than the desired amount of time between audits.

### Setting Drop

You can use Set_Drop.xlsx to determine what the drop should be. Only change the fields highlighted in green on the first and second tabs. You can view Gas_Estimates.png for the latest gas costs of the DAOracle.

**Master Settings**
| Name | Variable | Description | Setting |
| --- | --- | --- | --- |
| Feed ID | bytes32 feedID | The UMIP ID. This is the only variable that is already set. Do not change. | VolatilityDAOracle |
| Data Post Time Period | data period | How often should the creator post the data to an open-source database (e.g. IPFS) | INSERT_TIME_IN_SECONDS |
| Proposal Dispute Window | uint32 ttl | The length of time in seconds during which a value can be disputed | INSERT_TIME_IN_SECONDS |

**Bond Settings**

The higher the bondAmount the more secure the audit should be.

| Name | Variable | Description | Setting |
| --- | --- | --- | --- |
| Bond Token | IERC20 bondToken | The token to be used for bonds.| INSERT_TOKEN_ADDRESS |
| Bond Amount | uint256 bondAmount | The quantity of tokens to be put up for each bond.| INSERT_NON_DECIMAL_ADJUSTED_AMOUNT |

 **Reward Amount Settings**
| Name | Variable | Description | Setting |
| --- | --- | --- | --- |
| Reward Drop | uint256 drop | The amount of tokens accumulating per second for rewards.| INSERT_NON_DECIMAL_ADJUSTED_AMOUNT |

**Reward Distribution Settings**
| Name | Variable | Description | Setting |
| --- | --- | --- | --- |
| Reward Percentage Floor | uint64 floor | The minimum reward percentage of the user's share of the reward amount.| INSERT_PERCENTAGE (MINUMUM 0.01%) |
| Reward Percentage Ceiling | uint64 ceiling | The maximum reward percentage of the user's share of the reward amount.| INSERT_PERCENTAGE (MINUMUM 0.01%) |
| Reward Percentage Change | uint64 tilt | The percentage change per second floor->ceiling.| INSERT_PERCENTAGE (MINUMUM 10^18 of a %) |
| Methodology Creator Amount | uint64 tip | The percentage of the stakers reward that the Creator receives. | INSERT_PERCENTAGE |
| Methodology Creator Address | address hat | The address where the creator reward is sent. | INSERT_ADDRESS |

