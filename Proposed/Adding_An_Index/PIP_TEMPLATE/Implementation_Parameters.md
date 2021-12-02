# Implementation Parameters

If this implementation has parameters that do not affect the underlying methodology or implementation, create two tables of them below. In the **Parameters** table describe the potential settings. In the **Used Parameters** table describe which parameters are currently being proposed or used.

For example, the MFIV methodology and implementation can calculate implied volatility for two assets (ETH and BTC) at many different time periods (e.g. 1-270 days). Therefore,`asset` and `timewindow` are two parameters that need to be set by the DAO. Make sure that your `Acquire Input Data` step and your `Run Calculation` step in your README account for the potential that these parameters may be updated in the future.


Change the tables below for your implementation.

**Parameters**
| Name | Variable | Description | Potential Settings |
| --- | --- | --- | --- |
| Assets | asset | The asset symbol for which implied volatility is measured.  | ETH , BTC |
| Time Window | timewindow| The time window for the implied volatility expressed in days (e.g. 14DAY). | 1DAY-270DAY |

**Used Parameters**
The following is a table of current parameters.

| Name | Description | 
| --- | --- |
| ETH 14DAY | The 14DAY implied volatility of ETH |
