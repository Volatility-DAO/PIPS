# Managing a Methodology
Managing a methodology is the process for changing the open-source implementations. Specifically, following these instructions allows for any of the following:

* Make changes to any editable files within an Approved methodology directory. For example:
    * The Implementation
    * The README.md
* Remove a methodology from the Approved directory.

However, Managing a Methodology does **NOT** allow for changes to the following:

* **Index_PIPs** - To change or add an index you should use the [Managing An Index](/Proposed/Managing_An_Index/README.md) instructions.
* **METHODOLOGY.pdf** - You should not propose changes to the formal mathematical document that defines a methodology. If this needs to be changed the methodology should be removed and added again using the [Adding a Methodology](/Proposed/Adding_A_Methodology/README.md) instructions. This is essential to ensuring that the implementation executes the methodology.

## Steps

<details><summary> Starting Your PIP</summary>

#### Understanding Process

Your PIP will need to go through two distinct steps and a pull request.

#### Get Feedback On Your Idea
Anyone can publicly post an idea that they have for managing a methodology on the [Volatility Protocol Forum](https://forum.volatility.com/). The purpose of an idea is to elicit lots of feedback. Therefore, it’s good practice to do the following:

1. Tag your post with `[PIP IDEA]`. Both in the title and with the tag.
2. Introduce yourself in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord. You can also post a link to your forum post there and ask for feedback.

You do not need to post the idea for your managaging a methodology in the forum to propose changes but it will help with getting early feedback.

#### Learn How to Pull Request

For detailed steps on how to submit a pull request, you can follow the instructions in the [Submitting A Pull Request](../Submitting_A_Pull_Request.md) document.

## Starting Your PIP

1. Clone this repository.
2. Create a new branch. Name your branch based on the action of this PIP:
	- For changing an existing methodology, name your branch: `Changing_METHODOLOGY_YYYY-MM-DD`. For example, Changing_MFIV_2022-02-27.
	- For removing an existing methodology, name your branch: `Remove_METHODOLOGY_YYYY-MM-DD`. For example, Remove_MFIV_2022-02-27.
3. Duplicate the directory based on your action of this PIP:
	- For changing an existing methodology, duplicate the [CHANGING_METHODOLOGY_TEMPLATE](./CHANGING_METHODOLOGY_TEMPLATE/) directory. Rename the directory as `Change_METHODOLOGY_YYYY-MM-DD`. DO NOT CHANGE THE TEMPLATE ITSELF, ONLY YOUR COPY. This directory will be passed through each step of the PIP process.
	- For removing an existing methodology, duplicate the [REMOVING_METHODOLOGY_TEMPLATE](./REMOVING_METHODOLOGY_TEMPLATE/) directory. Rename the directory as `Remove_METHODOLOGY_YYYY-MM-DD`. DO NOT CHANGE THE TEMPLATE ITSELF, ONLY YOUR COPY. This directory will be passed through each step of the PIP process.

</details>

<details><summary> Step 1 - Changing A Methodology's Implementation Or Removing a Methodology</summary>
Your PIP should be changing a methodology's implementation OR removing a methodology, not both. Choose one.


### Changing A Methodology's Implementation

To submit a change to a methodology's implementation, take the following steps:

1. Make the proposed changes to the Approved Methodology Directory.
    * Note: You are not duplicating the directory. 
2. In your `Change_METHODOLOGY_YYYY-MM-DD` directory, fill out the following files:
	* `README.md`
	* `status.json` (name and description only)
3. Submit a pull request for your branch.
4. Under your pull request comment on every changed file. Every comment should address the following:
    * What is being changed in this file?
    * Why are you proposing this change?
    * How will this affect the implementation?
    * Does this affect the fidelity of the implementation to the METHODOLOGY.pdf?
5. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
6. DAO users will comment on all proposed changes.
7. A community call will be scheduled to discuss the changes.

You can gauge the community's sentiment on your PIP in both the final call and in Discord. You should move onto Step 2 only if you think your PIP can pass a governance vote.


### Removing a Methodology

1. In your `Remove_METHODOLOGY_YYYY-MM-DD` directory, fill out the following files:
	* `README.md`
	* `status.json` (name and description only)
2. Then move the METHODOLOGY directory to the [Removed_Or_Failed/Volatility_Oracle_Methodologies](/Removed_Or_Failed/Volatility_Oracle_Methodologies/) directory.
3. Submit a pull request for your branch.
4. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
5. DAO users will comment on all proposed changes.
6. A community call will be scheduled to discuss the changes.

You can gauge the community's sentiment on your PIP in both the final call and in Discord. You should move onto Step 2 only if you think your PIP can pass a governance vote.

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

### Text for changing a methodology

| `Title`  |
| ------------- | 
```
Vote to determine if the Changing_METHODOLOGY_YYYY-MM-DD pull request should be approved. 
``` 


| `Body`  |
| ------------- |
```
This vote is to determine if the Changing_METHODOLOGY_YYYY-MM-DD pull request should be approved and that the current approved implementation of METHODOLOGY will be modified. You can find the final pull request here: INSERT_URL.

Voting `Yes` - Means that the pull request will be approved and the current METHODOLOGY implementation will change.

Voting `No` - Means that the pull request will be Failed and the current METHODOLOGY implementation will NOT change.
``` 

### Text for removing a methodology

| `Title`  |
| ------------- | 
```
Vote to determine if the Removing_METHODOLOGY_YYYY-MM-DD pull request should be approved. 
``` 


| `Body`  |
| ------------- |
```
This vote is to determine if the Removing_METHODOLOGY_YYYY-MM-DD pull request should be approved and that the current approved METHODOLOGY will be removed from the Volatility Oracle. You can find the final pull request here: INSERT_URL.

Voting `Yes` - Means that the pull request will be approved and the current METHODOLOGY will be removed from the Volatility Oracle.

Voting `No` - Means that the pull request will be Failed and the current METHODOLOGY will NOT be removed from the Volatility Oracle.
``` 

</details>

<details><summary>Step 3 - Approved / Failed / Abandoned / Removed</summary>


| Status | Description |
| --- | --- |
| `Abandoned` | If a PIP is stuck at a step for many months or if a creator stops working on a PIP the pull request will be denied. It will be tagged with Abandoned.  |
| `Approved` |  If a PIP is Approved it will officially change the methodology implementation and the pull request will be merged.|
| `Failed` | If a PIP is Failed the pull request will be denied. It will be tagged with Failed. |
| `Removed` | If a PIP resolved as Removed then that means the vote did not pass. The METHODOLOGY will be moved to the [Removed_Or_Failed/Volatility_Oracle_Methodologies directory](/Removed_Or_Failed/Volatility_Oracle_Methodologies/) and the pull request will be merged. |
</details>

[See current Managing a Methodology proposals here](/../../#managing-a-methodology).
