# System Parameters

**Default Index Settings**
| Name| Variable| Description | Setting |
|-----|---------|-------------|---------|
|Dispute Period | `uint32 disputePeriod` | The amount of time in seconds during which a proposal can be disputed. | INSERT_SECONDS|
|Maximum Outstanding Disputes| `uint32 maxOutstandingDisputes`| This number is per an index. Once an index has this this number of disputes outstanding the Volatility Oracle will no longer post bonds for that index until a dispute is settled. | INSERT_NUMBER|

**Staking Pool Settings**
| Name| Variable| Description | Setting |
|-----|---------|-------------|---------|
|Staking Pool Deposit Fee | `uint256 mintFee` | The fee taken as a percentage of the total deposit a staker makes into a staking pool. | INSERT_PERCENTAGE ((MINUMUM 10^18 of a %)|
|Staking Pool Withdraw Fee | `uint256 burnFee` | The fee taken as a percentage of the total withdraw a staker takes from a staking pool. | INSERT_PERCENTAGE ((MINUMUM 10^18 of a %)|
|Staking Pool Fee Address| `address payee`| The address where staking pool fees are sent.| INSERT_ADDRESS|

**Sponsor Pool Settings**
| Name| Variable| Description | Setting |
|-----|---------|-------------|---------|
|Sponsor Pool Deposit Fee | `uint256 mintFee` | The fee taken as a percentage of the total deposit a sponsor makes into a sponsor pool. | INSERT_PERCENTAGE ((MINUMUM 10^18 of a %)|
|Sponsor Pool Withdraw Fee | `uint256 burnFee` | The fee taken as a percentage of the total withdraw a sponsor takes from a sponsor pool. | INSERT_PERCENTAGE ((MINUMUM 10^18 of a %)|
|Sponsor Pool Fee Address| `address feePayee`| The address where sponsor pool fees are sent.| INSERT_ADDRESS|

**Approved ERC-20 Tokens**

Currently The Volatility Oracle only accepts tokens that have been approved by UMA for the Optimistic Oracle. You can find a list of all approved tokens [here](https://docs.umaproject.org/uma-tokenholders/approved-collateral-currencies).
