# PIP Parameters

**Please note that the final parameters for this template will be updated when solidity contracts for the DAOracle are launched.**

Set the following parameters for the PIP.

**Bond Settings**
| Name | Variable | Description | Setting |
| --- | --- | --- | --- |
| Bond Token | IERC20 bondToken | The token to be used for bonds.| INSERT_TOKEN_ADDRESS |
| Bond Amount | uint256 bondAmount | The quantity of tokens to be put up for each bond.| INSERT_NON_DECIMAL_ADJUSTED_AMOUNT |

 **Reward Amount Settings**
| Name | Variable | Description | Setting |
| --- | --- | --- | --- |
| Reward Drip Amount | uint256 dripAmount | The amount of tokens accumulating per second for rewards.| INSERT_NON_DECIMAL_ADJUSTED_AMOUNT |

**Reward Distribution Settings**
| Name | Variable | Description | Setting |
| --- | --- | --- | --- |
| Reward Percentage Floor | uint256 rFloor | The minimum reward percentage of the user's share of the reward amount.| INSERT_PERCENTAGE (MINUMUM 0.01%) |
| Reward Percentage Floor | uint256 rCeiling | The maximum reward percentage of the user's share of the reward amount.| INSERT_PERCENTAGE (MINUMUM 0.01%) |
| Reward Percentage Change | uint256 rChangeRate | The percentage change per second rFloor->rCeiling.| INSERT_PERCENTAGE (MINUMUM 10^18 of a %) |
| Methodology Creator Reward | ??? | A boolean to determine if the creator of the index gets a reward. | INSERT_BOOLEAN |
| Methodology Createor Amount | ??? | The amount (in bps) of the stakers reward that the Methodologist receives. | INSERT_PERCENTAGE |

**Reward Vesting Settings**
| Name | Variable | Description | Setting |
| --- | --- | --- | --- |
| Reward Vesting | ??? | The amount of time in blocks the reward vests.| INSERT_NUMBER_OF_BLOCKS |
