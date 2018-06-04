# SPARQList

SPARQList is a REST API server which executes a SPARQL query, transform the result into formatted data if defined, and then send it back to a web client application. The configuration of API is written in the Markdown format in which parameters of the API, SPARQL endpoints, SPARQL queries, and JavaScript functions for content type negotiation and data transformation can be defined along with a free text documentation. Each SPARQList server instance can host multiple API configurations, therefore, each service can also be considered as a repository of reusable SPARQL queries with documentation.

## Docker version

```sh
$ docker run dbcls/sparqlist
```

## Configuration

See [GitHub](https://github.com/dbcls/sparqlist) for the instruction of local installation and configurable options.

## Screenshots

### List of APIs

![Fig-1](https://raw.githubusercontent.com/dbcls/master/services/images/SPARQList_fig-1.png)

### Execution of the API

![Fig-2](https://raw.githubusercontent.com/dbcls/master/services/images/SPARQList_fig-2.png)

### Markdown source code of the API

![Fig-3](https://raw.githubusercontent.com/dbcls/master/services/images/SPARQList_fig-3.png)

### Online Markdown editor

![Fig-4](https://raw.githubusercontent.com/dbcls/master/services/images/SPARQList_fig-4.png)


