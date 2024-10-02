# TogoImputation
 

### What is TogoImputation?
The service to perform imputation analysis of SNP array data.<br />
Operated in cooperation with Bioinformation and DDBJ Center at the National Institute of Genetics (NIG), ROIS.

### System Overview

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/Togoimputation_fig1_en.png)<br />
 The image of scientist is from TogoTV (© 2016 DBCLS TogoTV, CC-BY-4.0)

### Inputs and Outputs 
The inputs to the Imputation workflow are the following two data sets.

* Target genotype dataset: <br />
　Genotype data from SNP arrays. Users upload data to the server themselves. The VCF file format is supported. (PLINK format is currently not supported)

* Reference panel dataset: <br />
　Dataset contains the result of haplotype phasing. Eight ready-to-use reference panels are available.

Imputed genotype dataset is availeble for download.


### About the reference panel to be used<br />
If you use reference panels derived from  Unrestricted-access Data, it is not necessary to apply to use the panel data. But for those derived from the Controlled-Access Data, you need to apply to [NBDC Human Database](https://humandbs.dbcls.jp/en/) to use them.

### Available Imputation Algorithms<br />
Imputation analysis is performed using the following program.
* The reference / alternative allele of the input SNP array data is converted to match the reference panel data by using [conform-gt (version 24May16)](https://faculty.washington.edu/browning/conform-gt.html).
* Phasing and imputation analysis are performed by using [Beagle 5.2 (version 21Apr21.304)](https://faculty.washington.edu/browning/beagle/b5_2.html)<br />
* Genome data (VCF file) after imputation is indexed by using [bcftools (version 1.9)](http://samtools.github.io/bcftools/bcftools.html)<br />
* A series of workflows are implemented in [Common Workflow Language (CWL)](https://www.commonwl.org/), and published as [input-server workflow](https://github.com/ddbj/imputation-server-wf).


### Related service

## NBDC human database

Application to the "NBDC Human Database" is required to use some of the reference panels. For information on processing reference panel data for imputation [click here](https://humandbs.dbcls.jp/en/imputation-reference).


## Reference

* The NBDC-DDBJ imputation server facilitates the use of controlled access reference panel datasets in Japan Hum Genome Var. 2022 Dec 20;9(1):48. doi:0.1038/s41439-022-00225-6. 

<!--:-->
