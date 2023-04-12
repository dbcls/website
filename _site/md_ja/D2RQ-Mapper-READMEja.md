# D2RQ Mapper

To fully utilize data stored in the RDB (relational database) in the Semantic Web context while keeping the database content up-to-date, it is ideal to have a middleware to map RDB datasets to those of RDF (Resource Description Framework) graph and to provide an interface where user can access to the RDB using SPARQL (SPARQL Protocol and RDF Query Language).

D2RQ Mapper is a web application that assists generating configuration files for the D2RQ [D2RQ](http://d2rq.org) platform. D2RQ provides a SPARQL endpoint that connects to a designated RDB SQL interface and is also used to dump RDB datasets in RDF.

With the D2RQ Mapper, user can easily

* create/edit a mapping file which connects RDB database(s) and RDF
* join databases and tables if necessary
* configure mappings from RDB table columns and values in cells to RDF triples
* query the RDB databases with SPARQL on-the-fly, and
* dump a resulting RDF dataset

D2RQ Mapper generates both D2RQ and R2RML mapping files for download.

