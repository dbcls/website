# SPARQL support
### SPARQL support とは
ブラウザのテキストエリアでのSPARQLクエリ記述を補助するたのめの[CodeMirror](https://codemirror.net/)アドオンです。(http://sparql-support.dbcls.jp/)

#### SPARQL supportの特徴
* インデント、変数名、PREFIXなどを補完できます
* 複数のクエリを管理、実行できます
* UserScript managerを使うことで、任意のテキストエリアで実行できます

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQL_support_fig-1.png)

#### 補完の例
* "Ctrl+Space" または "Tab" キーで補完 
```
?h|             -->   ?hoge
r|              -->   rdf:|
F|              -->   FILTER (|)
PREFIX obo:|    -->   PREFIX obo: <http://purl.obolibrary.org/obo/>|
<id>|           -->   <http://identifiers.org/>|
```

#### 使い方
* http://sparql-support.dbcls.jp/ にアクセスするだけで利用できます。
* [リファレンス](http://sparql-support.dbcls.jp/sparql-support_j.html)
