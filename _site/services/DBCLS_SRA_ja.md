### DBCLS SRAとは

公共データベース（SRA [NCBI], ENA [EBI], DRA [DDBJ] ）に登録された「次世代シーケンサ」データについて、さまざまな統計情報から閲覧、比較、データのダウンロードができる目次サイトです。

( http://sra.dbcls.jp/ )

![サンプル1](https://github.com/dbcls/raw/master/services/images/DBCLSServices_SRA_fig-1_180528.png)　![サンプル2](https://github.com/dbcls/raw/master/services/images/DBCLSServices_SRA_fig-2_180528.png)

#### DBCLS SRAの特徴

* 複数に分かれた登録でも同じプロジェクトの実験ならば一度に表示

* 同じプロジェクトでも、違う実験条件の新たなデータが出ると、既存データの置換ではなく新規の登録としてデータベースにおさめられるため、それらをまとめて閲覧することは非常に困難でした。DBCLS SRAは、同じプロジェクトに属する実験を一覧表で閲覧し、実験条件の比較やデータのダウンロードができます。
* 目的別、機器別、生物種別に登録データを検索可能

* 次世代シーケンサのデータにはさまざまな目的（ゲノム解読、遺伝子発現、メタゲノム、等）や生物種のデータが混在しています。DBCLS SRAでは、これらのタイプ別にデータをカテゴリー分けし、検索・閲覧することができます。またタイプごとに頻度のランキング表やグラフがあるのでトレンド情報がわかります。今回 生物種について「イネそのものだけでなくjaponicaやindicaも」（下位概念検索）や「昆虫全体で」（グループ検索）といった検索が新しくできるようになりました。
* 次世代シーケンサを用いた論文と用いられたデータの情報をペアにした一覧も

* 諸外国の中にはプロジェクト等で産出されたデータをすべて公共データベースに登録することが義務となっているところもあるため、登録されているからといって必ずしも質の良いデータであるとは限りません。文献リストを用いることで論文に用いられるほどの質が担保された実験データにすばやくアクセスし、閲覧・ダウンロードすることができます。

#### 利用例

* 公共データベースに登録された次世代シーケンサのデータを探したいときに
* 次世代シーケンサを使った論文で使われているデータを見たいときに

#### 参考文献

* Nakazato T, Ohta T, Bono H. [Experimental design-based functional mining and characterization of high-throughput sequencing data in the Sequence Read Archive.](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0077910 "Experimental design-based functional mining and characterization of high-throughput sequencing data in the Sequence Read Archive.") PLoS ONE 8(10), e77910 (2013)
* 統合TV「DBCLS SRAを使ってNGSデータを検索する」[DOI: 10.7875/togotv.2014.097](http://doi.org/10.7875/togotv.2014.097)
