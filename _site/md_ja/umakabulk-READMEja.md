# Compile instructions:

1. Install jdk 1.8.*

2. Install sbt:
www.scala-sbt.org

3. Run:
sbt compile

To compile

## Optional

4. Install scala-ide: www.scala-ide.org
(This is a modified version of eclipse)

5. Run:
sbt eclipse

To generate an Eclipse project (can be imported into Eclipse later, with File/Import... Existing projects into workspace)

# How to use

## Configuration

Define environment variables in script/config.sh.
We have to define at least 2 variables:

- CSV_FILE_PATH: A path of csv which contains endpoints' information. This csv consists of 4 columns, endpoint_id, name, url, download_url as same as https://github.com/dbcls/umakadata/blob/master/web/data/endpoints.csv.

- BULKDOWNLOADS_DIR: Work directory. This tool download, extract RDF in it.

## Retrieve Bulk-Download data

```
./script/download.sh [ENDPOINT]
```

This command download data in the directory under the ${BULKDOWNLOADS_DIR}/[ENDPOINT]. If you do not specify ENDPOINT, this tool download all endpoints' data according to CSV_FILE_PATH.

## Extract RDF file

```
./script/extract.sh [ENDPOINT]
```

This command extract RDF in the directory under the ${BULKDOWNLOADS_DIR}/[ENDPOINT]/extractions. If you do not specify ENDPOINT, this tool extract all endpoints' data according to CSV_FILE_PATH.

NOTE: The following process detect RDF file by file extension. You have to modify file names if the file extension of extracted files is not none of "rdf", "rdfs", "owl", "xml", "nt", "ttl", "n3", "xml", "trix", "trig", "brf", "nq", "jsonld", "rj", "xhtml" and "html".

## Extract Candidates of Prefixes

```
./script/create_prefix.sh [ENDPOINT]
```

This command read RDFs, extract candidates of prefixes and output to ${BULKDOWNLOADS_DIR}/[ENDPOINT]_prefixes.csv. If you do not specify ENDPOINT, this tool create prefix file of all endpoints according to CSV_FILE_PATH.
