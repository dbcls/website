# RefEx
### About RefEx

**RefEx (Reference Expression dataset; http://refex.dbcls.jp) is a web tool for browsing reference gene expression, which provides access to curated data from several other public databases, with expression levels in forty tissues measured by four well-established gene-expression quantification technologies.** The web interface allows users to browse the expression profiles by the gene name, various types of IDs, chromosomal regions in genetic maps, gene family based on InterPro, gene expression patterns, or biological categories based on Gene Ontology, and to compare expression profiles by different methods at a glance.

![Fig-1](https://raw.githubusercontent.com/dbcls/master/services/images/DBCLSservices_RefEx_fig-1_180523.png)  

![Fig-2](https://raw.githubusercontent.com/dbcls/master/services/images/DBCLSservices_RefEx_fig-2_180523.png)

**RefEx provides suitable datasets as a reference for gene expression data from 40 normal human, mouse, and rat tissues and cells.** Forty tissues were selected based on the experience gained while constructing the [bodymap](http://dx.doi.org/10.1093/nar/gkj137) database. The 40 tissues are classified into 10 groups (i.e., brain, blood, connective, reproductive, muscular, alimentary, liver, lung, urinary, and endo/exocrine). These groupings are mainly used for the abstraction of the gene expression profiles in the summary view and the inference of gene functions by the gene expression profiles. The following four different measurement strategies were used in our collected gene expression data: ESTs, Affymetrix GeneChip, CAGE, and RNA-Seq. These four types of data were linked based on the NCBI gene IDs in the dataset in RefEx.

### GitHub Contents
- [Rawdata_Processing](https://github.com/hiromasaono/RefEx/tree/master/Rawdata_Processing)
- [Sample_Annotations](https://github.com/hiromasaono/RefEx/tree/master/Sample_Annotations)
- [Processed_Data](https://github.com/hiromasaono/RefEx/tree/master/Processed_Data)


### How to use RefEx
[![](http://img.youtube.com/vi/Jfo0Uquz15U/0.jpg)](https://www.youtube.com/watch?v=Jfo0Uquz15U)

### Citation

* Hiromasa Ono, Osamu Ogasawara, Kosaku Okubo, Hidemasa Bono
    **RefEx, a reference gene expression dataset as a web tool for the functional analysis of genes**
    Scientific Data, 4:170105
    [DOI: 10.1038/sdata.2017.105](http://doi.org/10.1038/sdata.2017.105)
