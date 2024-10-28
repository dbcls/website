# TogoID
## About TogoID
TogoID is a web application that allows you to convert identifiers (IDs) across diverse databases (DBs) in the life sciences. [https://togoid.dbcls.jp/](https://togoid.dbcls.jp/)

## Features of TogoID
- When you enter or upload a list of IDs, the candidate DBs are listed, and then you can convert the IDs to IDs of other databases. The converted IDs can be subsequently converted to other IDs.
- TogoID covers a wide range of categories of DBs such as gene, protein, variant, disease, pathway, chemical compound, structure, biological sample, cell line, publication, etc.
- Users can not only convert between IDs within the same category, but also between IDs of different categories that are related in different biological meanings, such as "genes in which a variant is located" or "pathways in which a protein participates". The semantics of the relationship is organized in an ontology, and the meaning is displayed on the arrows connecting the DBs in the web UI.
- The conversion results can be downloaded in CSV or TSV format or copied to the clipboard.
- The ID pairs stored in the TogoID system are maintained by programs to collect the ID relations from original DBs. As of October 2024, more than 70 DBs are included.
- The data is updated weekly, allowing users to refer to the most recent data for conversion.
- Users can obtain the labels, such as gene symbols, for conversion result IDs. For some DBs, users can also convert labels to IDs.
- The programs are managed in the GitHub repository TogoID-config (https://github.com/togoid/togoid-config). Anyone can send a pull request to add a method to obtain new ID pairs.
- TogoID is also available as an API, which allows other applications to use it for ID conversion.
    - Example: [Convert NCBI Gene IDs to PDB IDs via UniProt IDs and obtain the result as JSON](https://api.togoid.dbcls.jp/convert?ids=5460,6657,9314,4609&route=ncbigene,uniprot,pdb&format=json&report=full)

## Screenshots

### Exploratory ID conversion (EXPLORE mode)

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig1_20220520.jpg)

### Finds paths to connect the input to a target (NAVIGATE mode)

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig2_20220520.jpg)


### Results window for ID conversion

![Fig-4](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig4_20241025.jpg)

### Convert labels to IDs (LABEL2ID)

![Fig-5](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig5_20241025.jpg)

### DATASETS tab to view a list of datasets

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig3_20241025.jpg)


### References

* Shuya Ikeda, Hiromasa Ono, Tazro Ohta, Hirokazu Chiba, Yuki Naito, Yuki Moriya, Shuichi Kawashima, Yasunori Yamamoto, Shinobu Okamoto, Susumu Goto, Toshiaki Katayama
    **TogoID: an exploratory ID converter to bridge biological datasets.**
    Bioinformatics, 2022, btac491.
    [DOI: 10.1093/bioinformatics/btac491](https://doi.org/10.1093/bioinformatics/btac491)


<!--:-->
