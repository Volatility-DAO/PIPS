# Managing Methodology Indices

You can add, change, or remove an index for approved methodologies.

In order to manage an index your PIP **MUST** go through all of the following steps. 

## Prior to Starting

#### Get Feedback On Your Idea
Anyone can publicly post an idea that they have for an index on the [Volatility Protocol Forum](https://forum.volatility.com/). The purpose of an idea is to elicit lots of feedback. Therefore, it’s good practice to do the following:

1. Tag your post with `[PIP IDEA]`. Both in the title and with the tag.
2. Introduce yourself in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord. You can also post a link to your forum post there and ask for feedback.

You do not need to post the idea for your index in the forum to propose a methodology index change, but it will help with getting early feedback.

#### Learn How to Pull Request

For detailed steps on how to submit a pull request, you can follow the instructions in the [Submitting A Pull Request](../Submitting_A_Pull_Request.md) document.


## Steps to add, change, or remove an index

IMPORTANT: You can only manage indices for existing, approved methodologies. If you'd like to add a new methodology, [please read more here](../Adding_A_Methodology/README.md).

Your PIP should doing one action, adding, updating or removing an index. Choose only one per index. Separate PIPs should be created for different actions for each index.


<details><summary>Step 1 - Propose Index Change</summary>

### Add Index
1. Clone this repository.
2. Create a new branch. Name your branch `Add_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD`(e.g. - **Add_Index-MFIV-14D-ETH_2022-03-09**). 
3. In the Approved/METHODOLOGY/Index_PIPs directory, duplicate, fill out, and rename the `METHODOLOGY-TIMEPERIOD-ASSET.md` file.  DO NOT CHANGE THE TEMPLATE, ONLY YOUR COPY.
4. Modify the `methodology_config.yaml` in the same directory to reflect your new index.
5. Duplicate the [ADDING_INDEX_TEMPLATE](./ADDING_INDEX_TEMPLATE/) directory. Rename the directory as `Add_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD`. DO NOT CHANGE THE TEMPLATE ITSELF, ONLY YOUR COPY. This directory will be passed through each step of the PIP process.
6. In your `Add_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD` directory, fill out the following files:
	* `README.md`
	* `status.json` (name and description only)
7. Move your new directory into the [Step_1](./Step_1/) directory.
8. Submit a pull request for your working methodology index branch.
9. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
10. A community call will be scheduled to discuss the index change proposal.

You can gauge the community's sentiment on your PIP in both the final call and in Discord. You should move onto Step 2 only if you think your PIP can pass a governance vote.

### Change Index
1. Clone this repository.
2. Create a new branch. Name your branch `Change_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD`(e.g. - **Change_Index-MFIV-14D-ETH_2022-03-09**). 
3. In the Approved/METHODOLOGY/Index_PIPs directory, modify the `METHODOLOGY-TIMEPERIOD-ASSET.md` and the `methodology_config.yaml` file for the index you want to change.
4. Duplicate the [CHANGING_INDEX_TEMPLATE](./CHANGING_INDEX_TEMPLATE/) directory. Rename the directory as `Change_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD`. DO NOT CHANGE THE TEMPLATE ITSELF, ONLY YOUR COPY. This directory will be passed through each step of the PIP process.
5. In your `Change_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD` directory, fill out the following files:
	* `README.md`
	* `status.json` (name and description only)
6. Move your new directory into the [Step_1](./Step_1/) directory.
7. Submit a pull request for your working methodology index branch.
8. Under your pull request comment on every changed file:
    * What is being changed in this file?
    * Why are you proposing this change?
    * How will this affect the implementation?
    * Does this change affect the fidelity of the implementation to the METHODOLOGY.pdf?
9. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
10. A community call will be scheduled to discuss the index change proposal.

You can gauge the community's sentiment on your PIP in both the final call and in Discord. You should move onto Step 2 only if you think your PIP can pass a governance vote.

### Remove Index
1. Clone this repository.
2. Create a new branch. Name your branch `Remove_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD`(e.g. - **Remove_Index-MFIV-14D-ETH_2022-03-09**). 
4. Remove the `METHODOLOGY-TIMEPERIOD-ASSET.md` file for the index you want to remove. 
5. Remove the index from the `methodology_config.yaml`in the same directory.
4. Duplicate the [REMOVING_INDEX_TEMPLATE](./REMOVING_INDEX_TEMPLATE/) directory. Rename the directory as `Remove_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD`. DO NOT CHANGE THE TEMPLATE ITSELF, ONLY YOUR COPY. This directory will be passed through each step of the PIP process.
5. In your `Remove_Index-METHODOLOGY-TIMEPERIOD-ASSET_YYYY-MM-DD` directory, fill out the following files:
	* `README.md`
	* `status.json` (name and description only)
6. Move your new directory into the [Step_1](./Step_1/) directory.
8. Submit a pull request for your working methodology index branch.
9. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
10. A community call will be scheduled to discuss the index change proposal.

You can gauge the community's sentiment on your PIP in both the final call and in Discord. You should move onto Step 2 only if you think your PIP can pass a governance vote.


</details>

<details><summary>Step 2 - Voting</summary>

Creating a vote:
1. Votes are created on the official [Volatility DAO governance site](https://vote.volatility.com/).
2. Any VOL token holder with 1,000 VOL tokens can create a governance vote. If you do not have VOL tokens, you can either acquire them or you can ask someone in the DAO to post the vote for you.

All of the following criteria must be met for a vote to be considered valid:
1. Steps in this file are followed sequentially. NO step may be skipped.
2. The voting period is greater than or equal to 72 hours.
3. The vote is publicised in the [Discord announcements channel](https://discord.com/channels/807306992389062668/807306993139449938) channel of the Volatility DAO Discord with a link to the live vote. This announcement must be made when the vote goes live with a 30 minute window as the cutoff. 
4. The vote is formatted correctly (see below). 

Formatting a vote:
1. The vote must use single choice voting. Those single choices must be YES and NO. There may be no other choices besides those two.
2. The following text must be used as the vote's title and description. Change the CAPS text where needed with the appropriate information:
3. Make sure that you format the vote for the change you are making (i.e. Add Index, Change Index, or Remove Index).

### Add Index Language

| `Title`  |
| ------------- | 
```
Vote to determine if METHODOLOGY-TIMEPERIOD-ASSET should become a Volatility Oracle index.
``` 


| `Body`  |
| ------------- |
```
This vote is to determine if METHODOLOGY-TIMEPERIOD-ASSET should become an official Volatility Oracle index. You can find the final pull request here: INSERT_URL. 

Voting `Yes` - Means that METHODOLOGY-TIMEPERIOD-ASSET will be Approved and will added to the Volatility Oracle.

Voting `No` - Means that METHODOLOGY-TIMEPERIOD-ASSET will be Failed and will **NOT** be added to the Volatility Oracle.
``` 

### Change Index Language
| `Title`  |
| ------------- | 
```
Vote to determine if METHODOLOGY-TIMEPERIOD-ASSET should be changed in the Volatility Oracle.
``` 


| `Body`  |
| ------------- |
```
This vote is to determine if METHODOLOGY-TIMEPERIOD-ASSET should changed in the Volatility Oracle. You can find the final pull request here: INSERT_URL. 

Voting `Yes` - Means that METHODOLOGY-TIMEPERIOD-ASSET will be Approved and will be changed in the Volatility Oracle.

Voting `No - Means that METHODOLOGY-TIMEPERIOD-ASSET will be Failed and will **NOT** be changed in the Volatility Oracle.
``` 

### Remove Index Language
| `Title` |
| ------------- | 
```
Vote to determine if METHODOLOGY-TIMEPERIOD-ASSET should be removed from the Volatility Oracle.
``` 


| `Body`  |
| ------------- |
```
This vote is to determine if METHODOLOGY-TIMEPERIOD-ASSET should removed from the Volatility Oracle. You can find the final pull request here: INSERT_URL. 

Voting `Yes` - Means that METHODOLOGY-TIMEPERIOD-ASSET will be Approved and will be removed from the Volatility Oracle.

Voting `No` - Means that METHODOLOGY-TIMEPERIOD-ASSET will be Failed and will **NOT** be removed from the Volatility Oracle.
``` 
</details>

<details><summary>Step 3 - Approved / Failed / Abandoned / Removed </summary>


| Status | Description |
| --- | --- |
| `Abandoned` | If a PIP is stuck at a step for many months or if a creator stops working on a PIP the pull request will be denied. It will be tagged with Abandoned.|
| `Approved` |  If a PIP is Approved it will become an official index of the Volatility Oracle. The pull request will be merged and your directory will be moved to [Approved/Volatility_Oralce_PIPs](../../Approved/Volatility_Oracle_PIPs/)|
| `Failed` | If a PIP is Failed the pull request will be denied. It will be tagged with Failed. |
| `Removed` | If a PIP resolved as Removed the pull request will be approved and the `METHODOLOGY-TIMEPERIOD-ASSET.md` will be moved to the [Removed_Or_Failed/Volatility_Oracle_Indices directory](/Removed_Or_Failed/Volatility_Oracle_Indices/). The index will be removed from the `methodology_config.yaml`. The pull request will be merged and your directory will be moved to [Approved/Volatility_Oralce_PIPs](../../Approved/Volatility_Oracle_PIPs/) The DAO multi-sig will remove the index from the Volatility Oracle. |
</details>
