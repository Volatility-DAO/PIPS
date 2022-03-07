# Volatility DAO Governance

## Proposals 

Proposals are used to make official decisions within the Volatility DAO. Creating a proposal is an iterative process that goes from **Idea** → **Proposal** → **Community Call** → **Voting** → **Approved / Failed / Abandoned**. This is a transparent and open process that gives clear information to all community members and allows for all community members to give input.

Your PIP will need to go through three distinct steps. If your proposal does not pass all of these steps it will be considered **Failed**.

#### Get Feedback On Your Idea
Anyone can publicly post an idea that they have for governance on the [Volatility Protocol Forum](https://forum.volatility.com/). This could be changes to rewards, how to use the DAO treasury, or etc. The purpose of an idea is to elicit lots of feedback. Therefore, it’s good practice to do the following:

1. Tag your post with `[GOVERNANCE IDEA]`. Both in the title and with the tag.
2. Give your post the appropriate categories (e.g. Governance DAO or Governance PIP).
3. Introduce yourself in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord. You can also post a link of your forum post there and ask for people to give feedback.
4. Incorporate feedback and begin your draft proposal.

#### Learn How to Pull Request

For detailed steps on how to submit a pull request, you can follow the instructions in the [Submitting A Pull Request](../Submitting_A_Pull_Request.md) document.

## Starting Your PIP

1. Clone this repository.
2. Create a new branch.
	- Name your branch: `Proposal_NUMBER` (e.g. **Proposal_01**). Use the next available number from the table below.
3. Duplicate the [GOVERNANCE_PROPOSAL_TEMPLATE](GOVERNANCE_PROPOSAL_TEMPLATE) directory. Rename the directory as your Proposal_NUMBER (e.g. **Proposal_01**). This is known as your governance proposal directory. DO NOT CHANGE THE TEMPLATE STRUCTURE ITSELF. This directory will be passed through each step of the DAO Governance Proposal process. 

|Next Available Proposal Number|
|-------------|
|Proposal_07|

<details><summary>Step 1 - Submit Governance Proposal</summary>
 
To submit your goverance proposal, take the following steps:

1. In your governance proposal directory, fill out the following: 
	- `README.md`.
	- `status.json` (name and description only)
3. Move your governance proposal directory to the [/Step_1/](Step_1) directory.
3. Submit a pull request for branch.
4. Notify @everyone in the [Discord Governance Proposal channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. Users will ask questions about your methodology which you should answer. Users may also ask questions by commenting on your pull request.
5. A community call will be scheduled to discuss the final proposal. The author of the proposal will address questions and comments from the community. Make final changes to the proposal.

You can gauge the community's sentiment on your PIP in both the final call and in the Discord. You should move onto Step 2 only if you think your PIP can pass a governance vote.
</details>


<details><summary>Step 2 - Voting</summary>

Creating a vote:
1. Votes are created on the official [Volatility DAO Governance site](https://vote.volatility.com/).
2. Any VOL token holder with 1,000 VOL tokens can create a governance vote. If you do not have VOL tokens, you can either acquire them or you can ask someone in the DAO to post the vote for you.

All of the following criteria must be met for a vote to be considered valid:
1. Steps in this file are followed sequentially. NO step may be skipped.
2. The voting period is greater than or equal to 72 hours.
3. The vote is publicised in the [Discord announcements channel](https://discord.com/channels/807306992389062668/807306993139449938) channel of the Volatility DAO Discord with a link to the live vote. This announcement must be made when the vote goes live with a 30 minute window as the cutoff. 
4. The vote is formatted correctly.

Formatting a vote:
1. The vote must be properly formatted in your README.md. You should copy the text directly from the merged pull request.
</details>

<details><summary>Step 3 - Approved / Failed / Abandoned</summary>


| Status | Description |
| --- | --- |
| `Abandoned` | If a PIP is stuck at a step for many months or if a creator stops working on a proposal the pull request will be denied. It will be tagged with Abandoned. |
| `Approved` |  If a PIP is Approved the DAO will implement the proposal. The Proposal_NUMBER will be moved to the [Approved/Governance_PIPs directory](/Approved/Governance_PIPs) and the pull request will be merged. |
| `Failed` | If a PIP is Failed then that means the vote did not pass. The proposal will not be implemented by the DAO. The Proposal_NUMBER will be moved to the [Removed_Or_Failed/Volatility_DAO_Governance directory](/Removed_Or_Failed/Volatility_DAO_Governance/) and the pull request will be merged. |
</details>

[See current DAO Governance proposals here](/../../#volatility-dao-governance).