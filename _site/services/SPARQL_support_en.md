# SPARQL support
### What is SPARQL support?
SPARQL support is an addon of the [CodeMirror](https://codemirror.net/) to support editing SPARQL queries in a textarea.

#### Features of SPARQL support
* Complement indents, variable names and prefixes.
* Available multiple queries management.
* Available in any textarea by using UserScript manager.

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQL_support_fig-1.png)

#### Example of auto-completion
* Complement with the "Ctrl+Space" or "Tab" key. 
```
?h|             -->   ?hoge
r|              -->   rdf:|
F|              -->   FILTER (|)
PREFIX obo:|    -->   PREFIX obo: <http://purl.obolibrary.org/obo/>|
<id>|           -->   <http://identifiers.org/>|
```

#### Usage
* Abailable in http://sparql-support.dbcls.jp/
* [Reference](http://sparql-support.dbcls.jp/sparql-support.html)
