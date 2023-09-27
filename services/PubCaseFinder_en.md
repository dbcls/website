# PubCaseFinder
### About PubCaseFinder

PubCaseFinder is the generic name for the following three web services that are useful in the medical care and research of rare genetic diseases (Figure 1).

* DiseaseSearch ([https://pubcasefinder.dbcls.jp](https://pubcasefinder.dbcls.jp)）
* CaseSharing ([https://pubcasefinder.dbcls.jp/cases](https://pubcasefinder.dbcls.jp/cases))
* PanelSearch ([https://pubcasefinder.dbcls.jp/panelsearch](https://pubcasefinder.dbcls.jp/panelsearch))

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/PubCaseFinder_fig-3_20230728.png) 
Figure 1. Three Web services offered by PubCaseFinder

### About DiseaseSearch

Users can efficiently search for rare genetic diseases and genes that are highly relevant to a patient's signs and symptoms (Figure 2). DiseaseSearch also has the following features.

* We have developed a highly accurate similarity search algorithm to search for rare genetic diseases and genes that are highly relevant to a patient's signs and symptoms. For more information, please refer to the following paper.
  * Fujiwara, Toyofumi, Jae‐Moon Shin, and Atsuko Yamaguchi. "Advances in the development of PubCaseFinder, including the new application programming interface and matching algorithm." Human Mutation 43.6 (2022): 734-742. DOI: [https://doi.org/10.1002/humu.24341](https://doi.org/10.1002/humu.24341)
* Users can search for PubMed-listed English case reports and J-STAGE-listed Japanese case reports by disease.
* To assist in the input of signs and symptoms, a number of functions are provided, including automatic extraction of signs and symptoms from English and Japanese medical records, and the ability to input signs and symptoms using a human 3D model.
* DiseaseSearch is available in English and Korean as well as Japanese.


![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_PubCaseFinder_en_fig-2_20230927.png)
Figure 2. Search results for Genetic Disease in five signs/symptoms

### About CaseSharing
CaseSharing is a function for registering and managing case information on rare and genetic diseases accumulated by users (Figure 3). Case information on rare and genetic diseases is an indispensable resource for research on diagnosis, treatment, and drug discovery, but the cases themselves are rare and need to be continuously collected at multiple facilities. For this purpose, a system which is convenient for multiple facilities and users to access, and which can store and manage case information in a common format without ambiguous descriptions is desired. CaseSharing can be used by anyone with access to the Web and provides an easy way to register and manage case information in a common description and format. In addition, users can combine case information accumulated at multiple facilities. CaseSharing also has the following features.
* Users can use CaseSharing without user registration.
* Case information is stored on the user's own computer, not in the cloud.
* CaseSharing will be compatible with Phenopackets and OMOP, which are international case information sharing formats.
* CaseSharing supports English, Japanese, Korean, and Chinese languages to facilitate case information sharing with users around the world.

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/PubCaseFinder_fig-2_20230728.png)
Figure 3. CaseSharing at a glance


### About PanelSearch

PanelSearch is a publicly-available database that allows users to search and utilize gene panel data associated with 9,998 rare and genetic diseases in humans (Figure 4). PanelSearch also has the following features.
* The gene panel data can contribute to the efficient clinical interpretation of genomic sequences. For more information, please refer to the following reference.
  * Shin, J. M., Fujiwara, T., & Yamaguchi, A. (2023). Ontology‐based expansion of virtual gene panels to improve diagnostic efficiency for rare genetic diseases. [https://ceur-ws.org/Vol-3415/paper-10.pdf](https://ceur-ws.org/Vol-3415/paper-10.pdf)
* Users can search gene panel data by disease names or gene names and download it. In addition, all 9,998 gene panel data can be downloaded at once.
* Based on the Monarch Disease Ontology (Mondo), which includes many rare and genetic diseases, we have constructed gene panel data that automatically summarize disease-causing genes for each disease. By using the disease hierarchy information in Mondo, we have also automatically constructed gene panel data for disease groups such as Mendelian disease.

![Fig-4](https://raw.githubusercontent.com/dbcls/website/master/services/images/PubCaseFinder_fig-1_20230728.png)
Figure 4. Results of searching gene panel data by disease name

### Future of PubCaseFinder
PubCaseFinder aims to provide indispensable Web services for the promotion of medical care and research of rare genetic diseases by centrally collecting information on rare genetic diseases from all perspectives (Figure 5).

![Fig-5](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_PubCaseFinder_jp_fig-5_20230927.png)
Figure 5. The Future of PubCaseFinder


<!--:-->



<!--:-->
