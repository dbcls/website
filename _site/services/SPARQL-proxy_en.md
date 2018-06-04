# SPARQL-proxy

SPARQL-proxy is a portable Web application that works as a proxy server for any SPARQL endpoint providing the following functionalities:

* validation of the safety of query statements (omit SPARQL Update queries)
* job scheduling for a large number of simultaneous SPARQL queries
* providing a job management interface for time consuming SPARQL queries
* (optional) cache mechanisms with compression for SPARQL results to improve response time
* (optional) logging SPARQL queries and results
* (experimental) splitting a SPARQL query into chunks by adding OFFSET & LIMIT

## Docker version

```sh
$ docker run -p 8080:3000 -e SPARQL_BACKEND=http://example.com/sparql dbcls/sparql-proxy
```

## Configuration

See [GitHub](https://github.com/dbcls/sparql-proxy) for the instruction of local installation and configurable options.

## Screenshots

### SPARQL execution interface

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQ-proxy_fig-1.png)

### SPARQL-proxy administration interface

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQ-proxy_fig-2.png)



