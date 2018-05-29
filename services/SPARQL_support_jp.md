# SPARQL support
### SPARQL support とは
ブラウザのテキストエリアでのSPARQLクエリ記述を補助するたのめの[CodeMirror](https://codemirror.net/)アドオンです。(http://sparql-support.dbcls.jp/)

#### SPARQL supportの特徴
* インデント、変数名、PREFIXなどを補完できます
* 複数のクエリを管理、実行できます
* UserScript managerを使うことで、任意のテキストエリアで実行できます

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQL_support_fig-1.png)

#### 補完の例
* "Ctrl+Space" または "Tab" キーでインデント、変数名、PREFIX などを補完 
```
e.g.)	
?h|             -->   ?hoge
r|              -->   rdf:|
F|              -->   FILTER (|)
PREFIX obo:|    -->   PREFIX obo: &lt;http://purl.obolibrary.org/obo/&gt;|
&lt;id&gt;|           -->   &lt;http://identifiers.org/&gt;
```

#### 詳細
* http://sparql-support.dbcls.jp/sparql-support_j.html
