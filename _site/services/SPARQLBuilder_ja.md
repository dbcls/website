# SPARQL Builder
### SPARQL Builderとは

直観的GUIとマウス操作で生命科学系データベースに対するSPARQLクエリ記述を補助するシステムです．  
(http://sparqlbuilder.org/)

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/sparqlbuilder01_20180530.png)

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/sparqlbuilder02_20180530.png)  

### SPARQL Builderの特徴

#### マウス操作でSPARQLクエリが記述可能

* 生命科学のデータセットがアクセスできるSPARQLエンドポイントについて，クラスの関係を視覚的に確認しながら，マウス操作でSPARQLクエリが記述できます．

#### クラスの関係を自動的に計算してつながりを視覚的に表示

* どのクラスがどのクラスにつながっているか，また，どんな関係でつながっているかを自動的に計算し提示します．

#### 作られたSPARQLクエリはそのまま検索に利用可能

* ユーザが作ったSPARQLクエリはSend SPARQLボタンでそのまま検索に利用できます．

#### アプリケーション開発向けにはウェブAPIが利用可能

* ユーザが開発しているアプリケーションにSPARQL Builderの機能を組み込めるように，ウェブAPIが用意されています．

### 利用例

* RDF, SPARQLをこれから利用しようとしているユーザが，SPARQLクエリのテンプレート記述や例示ツールとして利用する．
* Linked Open Dataを利用したアプリケーションを開発しようとしているユーザが，クラス間関係とスキーマの提示ツールとして利用する．
* RDF, SPARQLをある程度利用してきたユーザが，未知のSPARQLエンドポイントに含まれるクラスとそれらの関係を読み解くツールとして利用する．

### 今後の開発予定

* 対象データセットを増やしていきます。また、ウェブ以外からの利用方法(アプリケーション組み込みなど)についても対応していきます。

### 参考文献

* Atsuko Yamaguchi, Kouji Kozaki, Kai Lenz, Yasunori Yamamoto, Hiroshi Masuya and Norio Kobayashi, Semantic Data Acquisition by Traversing Class-Class Relationships over the Linked Open Data, 5th Joint International Semantic Technology (JIST2016) Conference, LNCS 10055, 136-151
