# Volatility Oracle System Parameters

The Volatility Oracle has a series of parameters that need to be set in order for it to function. They can be broken into the following categories:

* Default Index Settings - The default settings for all indices. 
* Staking Pool Settings - Settings for the Staking Pools.
* Sponsor Pool Settings - Settings for the Sponsor Pools.
* Approved ERC-20 Tokens - Tokens that have been approved and whitelisted for use within a Staking Pool or Sponsor Pool.

## Current Parameter Settings
You can see current system parameters here: [Approved/Volatility_Oracle_PIPs/System_Parameters/System_Parameters.md](../../Approved/Volatility_Oracle_PIPs/System_Parameters/System_Parameters.md).

## Changing and/or adding parameters

<details><summary> Starting Your PIP</summary>

#### Understanding Process

Your PIP will need to go through two distinct steps and a pull request. The template is provided in the [System_Parameters](Proposed/Oracle_System_Parameters/System_Parameters) directory. **YOU SHOULD ONLY FILL OUT A TEMPLATE FOR THE CURRENT STEP IN YOUR SUBMISSION PROCESS.**

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
3. Duplicate the [SYSTEM_PARAMETERS_TEMPLATE](SYSTEM_PARAMETERS_TEMPLATE) directory. Rename the directory as `System_Parameters_YYYY-MM-DD`. DO NOT CHANGE THE TEMPLATE ITSELF, ONLY YOUR COPY. This directory will be passed through each step of the PIP process.

</details>

<details><summary> Step 1 - Propose System Parameters</summary>
To submit a change to the System Parameters, take the following steps:

1. Copy the `System_Parameters.md` file from the [Approved/System_Parameters](../../Approved/Volatility_Oracle_PIPs/System_Parameters/) directory to your new `System_Parameters_YYYY-MM-DD` directory.
1. Fill out the `System_Parameters.md` file. **Note: This file is a copy of the currently used parameters. Only fill out parameters that you are proposing to change.**
2. In your `System_Parameters_YYYY-MM-DD` directory, fill out the `status.json` file (name and description only).
3. Move your `System_Parameters_YYYY-MM-DD` directory into the [Step_1](./Step_1/) directory.
4. Submit a pull request for your branch.
5. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
6. DAO users will comment on all proposed system parameters.
7. A community call will be scheduled to discuss the changes.

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
| `Approved` |  If a PIP is Approved it will officially change the system parameters of the Volatility Oracle. The pull request will be approved and the `System_Parameters.md` file will be updated within the [Approved/Volatility_Oracle_PIPs/System_Parameters directory](/Approved/Volatility_Oracle_PIPs/System_Parameters/). The DAO multi-sig will update the system parameters.|
| `Failed` | If a PIP is Failed then that means the vote did not pass. The proposal will not be implemented by the DAO. The SYSTEM_PARAMETERS_YYYY-MM-DD directory will be moved to the [Removed_Or_Failed/Volatility_Oracle_System_Parameters directory](/Removed_Or_Failed/Volatility_Oracle_System_Parameters/) and the pull request will be merged. |
</details>

[See current Oracle System Parameters proposals here](/../../#oracle-system-parameters).
