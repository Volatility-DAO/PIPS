# Volatility Oracle System Parameters

The Volatility Oracle has a series of parameters that need to be set in order for it to function. They can be broken into the following categories:

* Default Index Settings - The default settings for all indices. 
* Staking Pool Settings - Settings for the Staking Pools.
* Sponsor Pool Settings - Settings for the Sponsor Pools.
* Approved ERC-20 Tokens - Tokens that have been approved and whitelisted for use within a Staking Pool or Sponsor Pool.

## Current Parameter Settings
<details><summary> Current Parameter Settings</summary>

**Default Index Settings**
| Name| Variable| Description | Setting |
|-----|---------|-------------|---------|
|Dispute Period | `uint32 disputePeriod` | The amount of time in seconds during which a proposal can be disputed. | INSERT_SECONDS|
|Maximum Outstanding Disputes| `uint32 maxOutstandingDisputes`| This number is per an index. Once an index has this number of disputes outstanding the Volatility Oracle will no longer post bonds for that index until a dispute is settled. | INSERT_NUMBER|

**Staking Pool Settings**
| Name| Variable| Description | Setting |
|-----|---------|-------------|---------|
|Staking Pool Deposit Fee | `uint256 mintFee` | The fee taken as a percentage of the total deposit a staker makes into a staking pool. | INSERT_PERCENTAGE (MINUMUM 10^18 of a %)|
|Staking Pool Withdraw Fee | `uint256 burnFee` | The fee taken as a percentage of the total withdraw a staker takes from a staking pool. | INSERT_PERCENTAGE (MINUMUM 10^18 of a %)|
|Staking Pool Fee Address| `address payee`| The address where staking pool fees are sent.| INSERT_ADDRESS|

**Sponsor Pool Settings**
| Name| Variable| Description | Setting |
|-----|---------|-------------|---------|
|Sponsor Pool Deposit Fee | `uint256 mintFee` | The fee taken as a percentage of the total deposit a sponsor makes into a sponsor pool. | INSERT_PERCENTAGE (MINUMUM 10^18 of a %)|
|Sponsor Pool Withdraw Fee | `uint256 burnFee` | The fee taken as a percentage of the total withdraw a sponsor takes from a sponsor pool. | INSERT_PERCENTAGE (MINUMUM 10^18 of a %)|
|Sponsor Pool Fee Address| `address feePayee`| The address where sponsor pool fees are sent.| INSERT_ADDRESS|

**Approved ERC-20 Tokens**
	
Currently The Volatility Oracle only accepts tokens that have been approved by UMA for the Optimistic Oracle. You can find a list of all approved tokens [here](https://docs.umaproject.org/uma-tokenholders/approved-collateral-currencies).

</details>

## Changing and/or adding parameters


<details><summary> Starting Your PIP</summary>

#### Understanding Process

Your PIP will need to go through two distinct steps and a pull request. All templates are provided in the [System_Parameters](Proposed/Oracle_System_Parameters/System_Parameters) directory. **YOU SHOULD ONLY FILL OUT A TEMPLATE FOR THE CURRENT STEP IN YOUR SUBMISSION PROCESS.**

#### Get Feedback On Your Idea
Anyone can publicly post an idea that they have for system parameters on the [Volatility Protocol Forum](https://forum.volatility.com/). The purpose of an idea is to elicit lots of feedback. Therefore, it’s good practice to do the following:

1. Tag your post with `[PIP IDEA]`. Both in the title and with the tag.
2. Introduce yourself in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord. You can also post a link to your forum post there and ask for feedback.

You do not need to post the idea for your system parameters in the forum to propose system parameters but it will help with getting early feedback.

#### Learn How to Pull Request

For detailed steps on how to submit a pull request, you can follow the instructions in the [Submitting A Pull Request](../Submitting_A_Pull_Request.md) document.

## Starting Your PIP

1. Clone this repository.
2. Create a new branch.
	- Name your branch: `SYSTEM_PARAMETERS_YYYY-MM-DD`.
3. Duplicate the [System_Parameters](System_Parameters) directory. Rename the directory as `System_Parameters_YYYY-MM-DD`. DO NOT CHANGE THE TEMPLATE ITSELF, ONLY YOUR COPY. This directory will be passed through each step of the PIP process.

</details>


<details><summary> Step 1 - Propose System Parameters</summary>
To submit a change to the System Parameters, take the following steps:

1. Fill out the `System_Parameters.md` file. Note: This file is a copy of the currently used parameters. Only fill out parameters that you are proposing to change.
2. Move your `System_Parameters_YYYY-MM-DD`directory into the [Step_1](Proposed/Oracle_System_Parameters/Step_1) directory.
3. Submit a pull request for your branch.
4. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
5. DAO users will comment on all proposed system parameters.
6. A community call will be scheduled to discuss the changes.

You can gauge the community's sentiment on your PIP in both the final call and in the Discord. You should move onto Step 2 only if you think your PIP can pass a governance vote.

</details>

<details><summary> Step 2 - Voting</summary>
Creating a vote:

1. Votes are created on the official [Volatility DAO governance site](https://vote.volatility.com/).
2. Any VOL token holder with 1,000 VOL tokens can create a governance vote. If you do not have VOL tokens, you can either acquire them or you can ask someone in the DAO to post the vote for you.

All of the following criteria must be met for a vote to be considered valid:

1. Steps in this file are followed sequentially. NO step may be skipped.
2. The voting period is greater than or equal to 72 hours.
3. The vote is publicised in the [Discord announcements channel](https://discord.com/channels/807306992389062668/807306993139449938) of the Volatility DAO Discord with a link to the live vote. This announcement must be made when the vote goes live with a 30 minute window as the cutoff. 
4. The vote is formatted correctly (see below).

Formatting a vote:

1. The vote must use single choice voting. Those single choices must be YES and NO. There may be no other choices besides those two.
2. The following text must be used as the vote's title and description. Change the CAPS text where needed with the appropriate information:

| `Title`  |
| ------------- | 
```
Vote to determine if the SYSTEM_PARAMETERS_YYYY-MM-DD pull request should be approved. 
``` 


| `Body`  |
| ------------- |
```
This vote is to determine if the SYSTEM_PARAMETERS_YYYY-MM-DD pull request should be approved and that the Volatility Oracle's parameters should be changed to reflect that pull request. You can find the final pull request here: INSERT_URL.

Voting `Yes` - Means that the pull request will be approved and the system parameters of the Volatility Oracle will change.

Voting `No` - Means that the pull request will be Failed and system parameters the Volatility Oracle will **not** change.
``` 

</details>

<details><summary>Step 3 - Approved / Failed / Abandoned</summary>


| Status | Description |
| --- | --- |
| `Abandoned` | If a PIP is stuck at a step for many months or if a creator stops working on a PIP the pull request will be denied. It will be tagged with Abandoned.  |
| `Approved` |  If a PIP is Approved it will officially change the system parameters of the Volatility Oracle. The pull request will be approved and the `System_Parameters.md` file will be updated within the [Approved/Volatility_Oracle_PIPs directory](/Approved/Volatility_Oracle_PIPs/). The DAO multi-sig will update the system parameters.|
| `Failed` | If a PIP is Failed then that means the vote did not pass. The proposal will not be implemented by the DAO. The SYSTEM_PARAMETERS_YYYY-MM-DD will be moved to the [Removed_Or_Failed/Volatility_Oracle_System_Parameters directory](/Removed_Or_Failed/Volatility_Oracle_System_Parameters/) and the pull request will be merged. |
</details>

[See current Oracle System Parameters proposals here](/../../#oracle-system-parameters).
