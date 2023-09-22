# TogoDX/Human
## What is TogoDX?
TogoDX (Togo Data eXplorer) is a framework for integrated exploration of various databases in the life sciences, using a knowledge graph. TogoDX aims to provide a new mechanism for flexibly extracting useful data for data science by filtering with various attributes of each dataset.

### Conceptual diagram of TogoDX

<img src="https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDX_concept_20230921_EN.png" width="720">

## About TogoDX/Human
TogoDX/Human is a one-stop application for exploring information on humans collected and integrated from diverse databases using the TogoDX framework. Currently, data can be explored using more than 50 attributes derived from a variety of databases, including genes, proteins, compounds, and diseases. Each attribute is visualized as a hierarchical classification or continuous value distribution, allowing users to narrow down data using the attribute of interest while viewing all data. In addition, by entering an ID list, the distribution of IDs in each attribute can be grasped. The resulting table allows the user to easily check information related to the IDs, and to download attribute information for further integrated analysis.
[https://togodx.dbcls.jp/human/](https://togodx.dbcls.jp/human/)


## Features of TogoDX/Human
- Users can select a part of the hierarchical classification or continuous value distribution for each attribute according to their own purposes and interests, and obtain results (e.g., a list of corresponding proteins) that match those conditions, which can be applied to target refinement of their research.
- By entering their own ID list (e.g., a list of differentially expressed genes from the experiment), users can get a bird's-eye view of the distribution in each attribute, and unexpected connections and biases in other attributes can help in the interpretation and discussion of the experimental results.
- The table resulting from the filtering can easily check the information related to that ID. In addition, those integrated attribute information can be downloaded and used for further integrated analysis.


## Screenshots

### TogoDX/Human Top page
![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDXhuman_top.png)

### Details of an attribute
![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDX_attribute_20211004.png)

### A table resulting from the filtering and its distribution
![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDX_results_20211004.png)

### Information related to the IDs that can be viewed from the table resulting from the filtering
![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDX_resultsstanza_20211004.png)
