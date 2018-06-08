# TogoWS

TogoWS is a REST API service which provides a uniform interface for various major bioinformatics databases to search, retrieve the entries.

TogoWS service embeds BioPerl, BioRuby and Ruby UCSC API for converting entry formats, partial retrieval of the entry, and data retrieval from the UCSC genome database.

## URL

http://togows.org/

### Search

* http://togows.org/search/database/query+string[/offset,limit][.format]

### Retrieve

* http://togows.org/entry/database/entry_id[,entry_id2,...][/field][.format]

### Convert

* http://togows.org/convert/data_source.format

### Log of external services

* http://togows.org/monitor/

## Screenshot

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoWS_fig-1.png)


