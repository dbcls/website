# SPARQL support
### SPARQL support とは
ブラウザのテキストエリアでの SPARQL クエリ記述を補助するたのめの CodeMirror アドオンです。(http://sparql-support.dbcls.jp/)

#### Auto-Completion
* "Ctrl+Space" または "Tab" キーでインデント、変数名、PREFIX などを補完 
      <pre>
e.g.)	
<strong style="font-weight:normal;color:#05a;">?h</strong>|             -->   <strong style="font-weight:normal;color:#05a;">?hoge</strong>|
r|              -->   <strong style="font-weight:normal;color:#f50;">rdf:</strong>|                                                       *lower case
F|              -->   <strong style="font-weight:normal;color:#708;">FILTER</strong> <strong style="font-weight:normal;color:#997;">(</strong>|<strong style="font-weight:normal;color:#997;">)</strong>                                                  *upper case
<strong style="font-weight:normal;color:#708;">PREFIX</strong> <strong style="font-weight:normal;color:#f50;">obo:</strong>|    -->   <strong style="font-weight:normal;color:#708;">PREFIX</strong> <strong style="font-weight:normal;color:#f50;">obo:</strong> <strong style="font-weight:normal;color:#170;">&lt;http://purl.obolibrary.org/obo/&gt;</strong>|              *1
<strong style="font-weight:normal;color:#170;">&lt;id&gt;</strong>|           -->   <strong style="font-weight:normal;color:#170;">&lt;http://identifiers.org/&gt;</strong>|                                  *2</pre>

#### 詳細
* http://sparql-support.dbcls.jp/sparql-support.html
