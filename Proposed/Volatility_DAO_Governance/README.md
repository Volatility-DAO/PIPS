# Volatility DAO Governance

## Proposals 

Proposals are used to make official decisions within the Volatility DAO. Creating a proposal is an iterative process that goes from Idea -> Proposal -> Community Call & Final Merge -> Voting -> Approved / Failed. This is a transparent and open process that gives clear information to all community members and allows for all community members to give input.

Your PIP will need to go through four distinct steps. If your proposal does not pass all of these steps it will be considered **Failed**.

#### Get Feedback On Your Idea
Anyone can publicly post an idea that they have for governance on the [Volatilty Protocol Forum](https://forum.volatility.com/). This could be changes to rewards, how to use the DAO treasury, or etc. The purpose of an idea is to elicit lots of feedback. Therefore, it’s good practice to do the following:

1. Tag your post with `[GOVERNANCE IDEA]`. Both in the title and with the tag.
2. Give your post the appropriate categories (e.g. Governance DAO or Governance PIP).
3. Introduce yourself in the [Discord pips channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO discord. You can also post a link of your forum post there and ask for people to give feedback.
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
|Proposal_05|

<details><summary>Step 1 - Submit Governance Proposal</summary>
 
To submit your goverance proposal, take the following steps:

1. In your governance proposal directory, fill out the following: 
	- `README.md`.
	- `status.json` (name and description only)
3. Move your governance proposal directory to the [/Step_1/](Step_1) directory.
3. Submit a pull request for branch.
4. Notify @everyone in the [Discord Governance Proposal channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO discord of the pull request.

Your proposal will now go through the following life cycle: Draft -> Final Comments.

Proposals that do not complete this cycle are considered Dropped.

**Draft [DO WE NEED TO GIVE MORE EXPLICIT INSTRUCTIONS HERE?]**

This is the first iteration of a proposal. Typically a Draft will undergo a series of rapid changes. Authors of the proposal should notify the community that the Draft is up and try to build consensus to move the Draft to Final Comments. Community members can open issues to flag sections that are unclear or sections with which they disagree. If the disagreement is around the parameterization of a part of the proposal (e.g. the number of rewards), polls can be done in Discord so that community members can signal their preference. There is no set time period for a proposal to be in Draft but a proposal should only move out of Draft status if the author feels it can pass a goverance proposal.

**Final Comments [DO WE NEED TO GIVE MORE EXPLICIT INSTRUCTIONS HERE?]**

When an author feels that major issues have been resolved and there is consensus around their proposal they can move it to Final Comments. An announcement in the Community Discord will be made that a proposal is in Final Comments. If no other major concerns arise, the proposal will be slated for discussion in a community call.

**Abandoned**

These are proposals that do not make it to the Community Call & Final Merge.
</details>

<details><summary>Step 2 - Community Call & Final Merge</summary>

 After a proposal has reached Final Comments it will be slated for discussion in a community call. The author of the proposal will address questions and comments from the community. Any final comments are added into the proposal. 

 After the Community Call if the author feels that their proposal can pass a governance vote, they can request for the pull request to be merged. A merged pull request is elligible for voting.

</details>

<details><summary>Step 3 - Voting</summary>

Creating a vote:
1. Votes are created on the official [Volatilty DAO Governance site](https://vote.volatility.com/).
2. Any VOL token holder with 1,000 VOL tokens can create a governance vote. If you do not have VOL tokens, you can either acquire them or you can ask someone in the DAO to post the vote for you.

All of the following criteria must be met for a vote to be considered valid:
1. Steps in this file are followed sequentially. NO step may be skipped.
2. The pull request must be merged.
3. The voting period is greater than or equal to 72 hours.
4. The vote is publicised in the [Discord announcements channel](https://discord.com/channels/807306992389062668/807306993139449938) channel of the Volatility DAO Discord with a link to the live vote. This announcement must be made when the vote goes live with a 30 minute window as the cutoff. 
5. The vote is formatted correctly.

Formatting a vote:
1. The vote must be properly formatted in your README.md. You should copy the text directly from the merged pull request.

</details>

<details><summary>Step 4 - Approved / Failed / Abandoned</summary>


| Status | Description |
| --- | --- |
| `Abandoned` | If a proposal is stuck at a step for many months or if a creator stops working on a proposal the pull request will be denied. It will be tagged with Abandoned. |
| `Approved` |  If a proposal is Approved it will the DAO will implement the proposal. The Proposal_NUMBER will be moved to the [Approved/Governance directory](/Approved/Governance). |
| `Failed` | If a proposal is Failed then that means the vote did not pass. It will be moved to the [Failed directory](/Removed_Or_Failed). |
</details>

[See current DAO Governance proposals here](/../../#volatility-dao-governance).