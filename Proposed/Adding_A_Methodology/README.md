# Adding a Methodology through a PIP

In order for a methodology to be added to the Volatility Oracle it MUST go through all of the following steps. 

## Prior to Starting

#### Understanding Process

Your PIP will need to go through 4 distinct steps and several pull requests. Different steps have different template `.md` files that you will need to fill out. All of these are provided in Step 1. **YOU SHOULD ONLY FILL OUT A TEMPLATE FOR THE CURRENT STEP IN YOUR SUBMISSION PROCESS.**

#### Get Feedback On Your Idea
Anyone can publicly post an idea that they have for a methodology on the [Volatility Protocol Forum](https://forum.volatility.com/). The purpose of an idea is to elicit lots of feedback. Therefore, it’s good practice to do the following:

1. Tag your post with `[PIP IDEA]`. Both in the title and with the tag.
2. Introduce yourself in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord. You can also post a link to your forum post there and ask for feedback.

You do not need to post the idea for your methodology in the forum to propose a methodology but it will help with getting early feedback.

#### Learn How to Pull Request

For detailed steps on how to submit a pull request, you can follow the instructions in the [Submitting A Pull Request](../Submitting_A_Pull_Request.md) document.

## Starting Your PIP

1. Clone this repository.
2. Create a new branch.
	- Name your branch: `METHODOLOGY` (e.g. - **MFIV**). This is known as your working methodology branch.
3. Duplicate the [PIP TEMPLATE](PIP_TEMPLATE) directory. Rename the directory as your methodology (e.g. MFIV). This is known as your methodology directory. DO NOT CHANGE THE TEMPLATE ITSELF, ONLY YOUR COPY. This directory will be passed through each step of the PIP process.


<details><summary>Step 1 - Propose Methodology</summary>
 
To submit a formal version of your methodology, take the following steps:

1. Write your methodology as a formal mathematical document and save it as a `.pdf`. Name it `METHODOLOGY.pdf` (e.g **MFIV.pdf**).
2. In your methodology directory, add your `METHODOLOGY.pdf`.
3. In your methodology directory, fill out the `status.json` file (name and description only).
4. Move your methodology directory to the [/Step_1/](Step_1) directory.
5. Submit a pull request for your working methodology branch.
6. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. Users will ask questions about your methodology which you should answer. 
7. A community call will be scheduled to discuss if the pull request should be approved or if more comments need to be resolved. A verbal vote will take place in the call or an informal vote will be done on Discord.

If the pull request is approved, move onto Step 2. If the pull request is not approved you can make additional changes and repeat the necessary steps above or you can Abandon your PIP.
</details>

<details><summary>Step 2 - Propose Implementation</summary>

IMPORTANT: By submitting your methodology, your code will be open-sourced under the MIT License.

To submit a version of an implementation take the following steps (**DO NOT DUPLICATE YOUR DIRECTORY IN THIS STEP**):

1. In your methodology directory, fill out the following: 
	- `README.md`.
	- `LICENSE` (Your open-source implementation will need to have an MIT license to be considered by the DAO.)
2. In your methodology directory, add your open-source code to the `Implementation` directory.
3. In the `Implementation` directory, provide and overview and detail instructions on how to test and run your open-source code.
4. Move your methodology directory to the [/Step_2/](Step_2) directory.
5. Submit a pull request for your working methodology branch.
6. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
7. Users should be able to calculate your methodology. DAO users may comment on all files of your pull request. If they run into any issues or have any questions you should answer them. You should respond to and resolve as many comments as possible.
8. A community call will be scheduled to discuss if the pull request should be approved or if more comments need to be resolved. A verbal vote will take place in the call or an informal vote will be done on Discord.

If the pull request is approved, move onto Step 3. If the pull request is not approved you can make additional changes and repeat the necessary steps above or you can Abandon your PIP.
</details>

<details><summary>Step 3 - Submit PIP</summary>

To submit an official PIP, take the following steps (**DO NOT DUPLICATE YOUR DIRECTORY IN THIS STEP**):

1. Before you can submit your PIP you must provide at least one index using your methodology. Only one is necessary for approval. Additional indices can be added in the future. For each index you'd like to add fillout the following in your METHODOLOGY/Index_PIPs directory:
	- `METHODOLOGY-TIMEPERIOD-ASSET.md` - One file per index. Rename the file with the following naming convention:
		* **METHODOLOGY** - The name of this methodology directory.
		* **TIMEPERIOD** - This is the time period to which the methodology is applied. Time periods use standardized time formats, where lower-denomination units are lowercase and higher-denominations are uppercase:
    		* `s` = seconds
    		* `m` = minutes
    		* `h` = hours
   		    * `D` = Days
    		* `W` = Weeks
    		* `M` = Months
   			* `Y` = Year
    			* For example, 14D means 14 Day volatility.
		* **ASSET** - The asset which is measured. 	
	- `methodology_config.yaml` ([learn more about the methodology_config.yaml here](./PIP_TEMPLATE/Index_PIPs/METHODOLOGY_CONFIG.md)) - There should only be one yaml file containing all indices.
2. Move your methodology directory to the [/Step_3/](Step_3) directory.
3. Submit a pull request for your working methodology branch.
4. Notify @everyone in the [Discord PIPs channel](https://discord.com/channels/807306992389062668/904816574215635025) of the Volatility DAO Discord of the pull request. 
5. DAO users will comment on all `METHODOLOGY-TIMEPERIOD-ASSET.md` files but can also comment on any file within the directory. You should respond to and resolve as many comments as possible.
6. A community call will be scheduled to discuss the final proposal.

You can gauge the community's sentiment on your PIP in both the final call and in the Discord. You should move onto Step 4 only if you think your PIP can pass a governance vote.
</details>

<details><summary>Step 4 - Voting</summary>

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

| `Title` |
| ------------- | 
```
Vote to determine if INSERT_METHODOLOGY should become a Volatility Oracle Methodology.
``` 


| `Body` |
| ------------- |
```
This vote is to determine if INSERT_METHODOLOGY should become an official Volatility Oracle Methodology. You can find the final pull request for INSERT_METHODOLOGY here: INSERT_URL. 

Voting `Yes` - Means that INSERT_METHODOLOGY will be Approved and will be added to the Volatility Oracle.

Voting `No` - Means that INSERT_METHODOLOGY will be Failed and will NOT be added to the Volatility Oracle.
``` 

</details>

<details><summary>Step 5 - Approved / Failed / Abandoned</summary>


| Status | Description |
| --- | --- |
| `Abandoned` | If a PIP is stuck at a step for many months or if a creator stops working on a PIP the pull request will be denied. It will be tagged with Abandoned. In the case where a methodology or implementation pull request has already been approved, then they may be removed from the repo. |
| `Approved` | If a PIP is Approved it will become an official methodology of the Volatility Oracle. Your methodology directory will be moved to the [Approved/Volatility_Oracle_PIPs directory](/Approved/Volatility_Oracle_PIPs) and the pull request will be merged. |
| `Failed` | If a PIP is Failed then that means the vote did not pass. The methodology will not be implemented by the DAO. Your methodology directory will be moved to the [Removed_Or_Failed/Volatility_Oracle_Methodologies directory](/Removed_Or_Failed/Volatility_Oracle_Methodologies/) and the pull request will be merged. |
</details>

[See current Adding A Methodology proposals here](/../../#adding-a-methodology).