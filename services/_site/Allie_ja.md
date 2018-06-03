# Allie
### Allieとは
MEDLINE（米国立医学図書館が開発・維持している生物医学文献書誌情報データベース）を利用して、文献中に登場する略語とその正式名称の組およびその付随情報を検索します。

### Allieの特徴

* 生命科学系の文献のタイトルとアブストラクトに出現する略語とその正式名称の組について、略語と正式名称のいずれか一方、あるいは、正式名称の一部をクエリとする検索ができます。
* 日本語の対訳がある正式名称については、あわせて表示します。
* 検索結果の略語もしくは正式名称について、それらが出現する文献情報も取得が可能です。
* タイトルとアブストラクトとの両方に、ともに出現するほかの略語や正式名称も検索結果から閲覧できます。
* 各種WebAPI(REST/SOAP/SPARQL)を備えているので、自分で作成したプログラムでAllieを呼び出すことができます。
* 略語と正式名称の組、および、その出現PubMed IDを収めたデータベースをタブ区切りとResource Description Framework (RDF)の双方の形式で自由にダウンロードできます。

### 利用例

* ある略語について、その正式名称を知る。
* ある略語が最初に文献に登場した時期を知る。
* 新たな略語をつくろうとしたとき、その略語がすでに存在しているかどうかを調べる。

### 今後の開発予定

引き続き日本語訳の充実および月一度の定期更新を行います。

### 参考文献

* Yamamoto, Y., Yamaguchi, A., Bono, H., Takagi T. (2011). Allie: a database and a search service of abbreviations and long forms. Database, 2011:bar03.
* 統合TV「Allieを使って略語の正式名称を検索する2010」DOI: 10.7875/togotv.2010.111