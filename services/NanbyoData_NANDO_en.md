# NanbyoData
NanbyoData, an Intractable Disease Information Portal Site Promoting International Integration and Sharing of Intractable Disease Information
Since the classification of intractable diseases is unique to Japan, it has been difficult to integrate and share information internationally. Therefore, we systematized the disease classification of intractable diseases for the first time in Japan as NANDO (Nanbyo Disease Ontology), a vocabulary of names of intractable diseases, and constructed a portal site [NanbyoData](https://nanbyodata.jp) that integrates information related to intractable diseases in Japan and overseas by using NANDO. 

## About NanbyoData
We are integrating domestic and foreign information related to intractable diseases using MetaStanza developed by DBCLS and an integrated database that DBCLS is proceeding to organize using RDF (Resource Description Framework) technology. 
NanbyoData allows users to view information automatically aggregated from various Japanese and oversea databases, including genetic and phenotypic information on intractable diseases outside Japan that was previously unavailable (Figure 1). Below is the main information provided by NanbyoData.
   1. disease overview (information from inside and outside Japan)
   2. disease-causing genes (information from outside Japan)
   3. clinical genetic test information (information from inside Japan) 
   4. clinical characteristics (information from outside Japan)
   5. intractable disease-specific bioresource mouse/cell/gene (information from inside Japan)
   6. variant information (information from inside and outside Japan)

### Figure 1. NanbyoData's disease information website
![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/Nanbyo_Fig1_20240828.png)

## About NANDO
NANDO, which NanbyoData utilizes to collect information related to intractable diseases, is a vocabulary collection that systematically and comprehensively organizes the names of intractable diseases covered by the two intractable disease systems in Japan, the designated intractable disease system and the pediatric chronic specified disease system (Figure 2).
- It covers designated intractable diseases (338 diseases as of June 2024) and includes all subtypes of those diseases.
- It covers chronic childhood diseases (814 diseases as of June 2024) and includes all subtypes of those diseases.
- The database is linked to Mondo (Mondo Disease Ontology), a disease name vocabulary used by many databases and systems internationally, and enables linkage to major international disease databases such as OMIM and Orphanet. In addition to including a link to Mondo within NANDO, an international collaboration has also included a link to NANDO within Mondo. This facilitates international integration and sharing of information through both ontologies.

### Figure 2．NANDO Hierarchy and Definition of Terms (from NCBO BioPortal)
![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/Nanbyo_Fig2_20240828.png)


## Examples of Use
### Case 1
At [Rare Disease Day]（https://rddjapan.info/2022)（held on Feb. 29th, 2022) , a panel display of all the intractable diseases included in NANDO gave participants a sense of the many types of intractable diseases (Figure 3).
 
#### Figure 3. Panel display of all rare diseases on Rare Disease Day ( at RDD2022) 
![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/Nanbyo_Fig3_20240828.png)

### Case 2
Mondo, a disease ontology used in numerous databases and systems internationally, has adopted a link to NANDO (after releases/2024-07-02), allowing clinicians and researchers outside Japan who use Mondo to access information on intractable diseases in Japan (Figure 4). 

#### Figure 4. An example of a link to NANDO contained in Huntington disease entry of Mondo (from EMBL-EBI Ontology Lookup Service)
![Fig-4](https://raw.githubusercontent.com/dbcls/website/master/services/images/Nanbyo_Fig4_20240828.png)

## About NanbyoData/NANDO in the future
NANDO will deepen cooperation with major ontologies outside of Japan, aiming to become an indispensable ontology for integrating and sharing information on intractable diseases. NanbyoData will also integrate major Japanese and international resources related to intractable diseases, aiming to become an indispensable website for the promotion of medical treatment and research on intractable diseases.

<!--:-->
