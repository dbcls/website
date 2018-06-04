# TogoGenome

TogoGenome is a genome database purely based on the Semantic Web technology which enables integration of heterogeneous data and adaptable semantic search. All information is stored as Resource Description Framework (RDF) data and reporting web pages are generated on-the-fly by SPARQL queries. TogoGenome provides a semantic faceted search system by gene functional annotation, taxonomy, phenotypes and environment based on the relevant ontologies. It also serve a platform to conduct semantic comparative genomics where user can find pan-organism or organism specific genes based on the functional aspect of gene annotations and combination of organisms from different taxa. TogoGenome database has a modularized structure and each module in the report pages is separately served as TogoStanza, a generic framework for rendering an information block as IFRAME/WebComponents, which can also be reused in constructing another database unlike many other monolithic databases. Additionally, a conversion system for identifiers among various life science databases is provided based on the known links between URIs of those databases in our RDF dataset.

## URL

http://togogenome.org/

## Screenshots

### Faceted serach

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoGenome_fig-1.png)

### Gene report

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoGenome_fig-2.png)

### Environmet report

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoGenome_fig-3.png)


