```                                       
                       .==:                    
                     :======:                  
                    .=========:                
                      :=========:              
                   .-=-.:=========:            
                 .-======..=========:          
               .-++======-  :=========:        
             .-+++++++=-.     .=========:      
             .::::::::.        .::::::::.      
              :=+++++++=:    .-========-.      
                :=+++++++=:.-++++====-.        
                  :=++++++++++++++=-.          
                    :=+++++++++++-             
                      :=+++++++-.              
                        :=+++-.                
                          :-                   
                                         
 _____             _____                        _        
(____ \     /\    / ___ \                      | |       
 _   \ \   /  \  | |   | |  ____   ____   ____ | |  ____ 
| |   | | / /\ \ | |   | | / ___) / _  | / ___)| | / _  )
| |__/ / | |__| || |___| || |    ( ( | |( (___ | |( (/ / 
|_____/  |______| \_____/ |_|     \_||_| \____)|_| \____)                
```

# Protocol Improvement Proposals (PIPs)

Protocol Improvement Proposals (PIPs) are used to make specific changes to the Volatility Volatility Oracle. A PIP can be in one of four states:

|PIP State| Definition|
|-------- |-----------|
|Approved | These are PIPs that have passed through the process and are now a part of the Volatility Oracle.|
|Proposed | These are PIPs that are in the process of being considered for the Volatility Oracle.|
|Removed  | These are PIPs that were at one time part of the Volatility Oracle but have been removed.|
|Failed   | These are PIPs where the pull request was approved but the governance vote failed.|


## Submit a PIP
All PIPs go through an iterative process of submission where they move from an Idea → Formal Feedback → Voting → Approved/Failed/Abandoned. The particular steps to get a PIP approved are dependent on the type of PIP you are submitting. At a high level there are two PIP types:
1. PIPs for The Volatility DAO -  These PIPs encompass all governance proposals that are outside of The Volatility Oracle. They include but are not limited to governance proposals, rewards proposals, administrative proposals, etc.
2. PIPs for The Volatility Oracle - These PIPs directly relate to The Volatility Oracle, its methodologies, and its indices.

To contribute to this repo or to submit a PIP, follow the instructions for the type of PIP you are creating:


### The Volatility DAO
- [Volatility DAO Governance](Proposed/Volatility_DAO_Governance/README.md) - Use this process if you want to create a governance proposal specifically for the Volatility DAO (e.g. not specific to the Volatility Oracle).

### The Volatility Oracle
- [Oracle System Parameters](Proposed/Oracle_System_Parameters/README.md) - Use this process to set fees within the oracle, to set the address where fees are sent, to set default parameters (e.g. dispute period), and to add/remove ERC-20 tokens that can be used in the Volatility Oracle.
- [Adding a Methodology](Proposed/Adding_A_Methodology/README.md) - Use this process if you want to add a methodology to the Volatility Oracle.
- [Managing a Methodology](Proposed/Managing_A_Methodology/README.md) - Use this process to change a methodology in any way (e.g. its parameters, its open-source code) or to remove a methodology from the Volatility Oracle.
- [Managing an Index](Proposed/Managing_An_Index/README.md) - Use this process if you want to add, update, or remove an index to The Volatility Oracle. Note that this index must be derived from an already approved methodology.

# Directories of PIPs

## Approved 

### The Volatility DAO
| Proposal | Date Approved | Description |
| --- | --- | --- | 
| [Proposal 3](https:&#x2F;&#x2F;github.com&#x2F;Volatility-DAO&#x2F;PIPS&#x2F;tree&#x2F;main&#x2F;Approved&#x2F;Governance_PIPs&#x2F;Proposal_03&#x2F;)| Sep 14, 2021 | Returning to Voting on Rewards and Reverting the DAO Allocation |
| [Proposal 4](https:&#x2F;&#x2F;github.com&#x2F;Volatility-DAO&#x2F;PIPS&#x2F;tree&#x2F;main&#x2F;Approved&#x2F;Governance_PIPs&#x2F;Proposal_04&#x2F;)| Nov 19, 2021 | New Voting Mechanism |
| [PROPOSAL_5](https:&#x2F;&#x2F;github.com&#x2F;Volatility-DAO&#x2F;PIPS&#x2F;tree&#x2F;main&#x2F;Approved&#x2F;Governance_PIPs&#x2F;Proposal_05&#x2F;)| Jan 1, 2022 | Creation of KPI Options Batch 2 |


### The Volatility Oracle
| Proposal | Date Approved | Description |
| --- | --- | --- | 
| [MFIV](https:&#x2F;&#x2F;github.com&#x2F;Volatility-DAO&#x2F;PIPS&#x2F;tree&#x2F;main&#x2F;Approved&#x2F;Volatility_Oracle_PIPs&#x2F;MFIV&#x2F;)| Feb 26, 2022 | Model Free Implied Volatility |

## Proposed

Directory Status Keys:
* `Comment` - Pull request open for comment.
* `Community Call` - Community call is scheduled for review.
* `Voting` - A governance vote is scheduled or live.

### Volatility DAO Governance
| Proposal | Description | Current Step |
| --- | --- | --- | 
| [Proposal_06](https:&#x2F;&#x2F;github.com&#x2F;Volatility-DAO&#x2F;PIPS&#x2F;tree&#x2F;Proposal_06&#x2F;Proposed&#x2F;Volatility_DAO_Governance&#x2F;Step_1&#x2F;Proposal_06&#x2F;)| Send 800,000 VOL tokens into a Sponsor Pool when the DAOracle smart contracts launch. These tokens will be used as rewards and bonds to ensure the MFIV index is audited. | Step 1 |

### Oracle System Parameters
*There are currently no oracle system parameter proposals, start one!*

### Adding A Methodology
*There are currently no adding a methodology proposals, start one!*

### Managing A Methodology
*There are currently no managing a methodology proposals, start one!*

### Managing An Index
*There are currently no managing an index proposals, start one!*
