### DDBJ Searchとは

DDBJ が管理する公共データベースのうち、 SRA (DRA), BioSample, BioProject のそれぞれのデータベースに登録されたデータを高速に検索し、データのダウンロードができる検索サービスです。

( http://sra.dbcls.jp/ )

![fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSServices_DDBJ_Search_fig-1_191224.png)
![fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSServices_DDBJ_Search_fig-2_191224.png)

#### DDBJ Search の特徴

* 高速な全文検索<br  />
次世代シーケンサーのデータが登録される SRA, それらに用いられるサンプル情報を登録する BioSample, プロジェクト情報を登録しサンプルやデータを統括する BioProject, これらのデータベースはデータの増加に伴い非常に大規模なものになっています。そのため、データを互いに交換する協力機関である NCBI, EBI, DDBJ がそれぞれ提供している検索サービスは、検索速度のパフォーマンスが下がっており、大量のデータから必要なものを探し出すことが困難になっていました。DBCLS では、データ構造の見直しと全文検索エンジンの導入により、高速な全文検索を実現しています。これにより、研究者が大量のデータの中から迅速に目的とするデータに辿り着くことをサポートしています。また、プログラムからの利用を想定したAPIも提供します。

* 統計情報、生物分類、関連文献による検索も<br  />
旧 DBCLS SRA で提供していた各種統計情報や生物分類を用いた検索、関連する文献を用いたデータの検索も、旧サイトを通じて提供しています。これらの機能は順次 DDBJ Search の機能として移植される予定となっています。

#### 利用例

* 公共データベースに登録された次世代シーケンサのデータを探したいときに
* 次世代シーケンサを使った論文で使われているデータを見たいときに

#### 参考文献

* Nakazato T, Ohta T, Bono H. [Experimental design-based functional mining and characterization of high-throughput sequencing data in the Sequence Read Archive.](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0077910 "Experimental design-based functional mining and characterization of high-throughput sequencing data in the Sequence Read Archive.") PLoS ONE 8(10), e77910 (2013)
* Ohta T, Nakazato T, Bono H. [Calculating quality of public high-throughput sequencing data to obtain suitable subset for reanalysis from the Sequence Read Archive.](https://academic.oup.com/gigascience/article/6/6/gix029/3752508 "Calculating quality of public high-throughput sequencing data to obtain suitable subset for reanalysis from the Sequence Read Archive.") GigaScience (2017) [DOI: 10.1093/gigascience/gix029](https://doi.org/10.1093/gigascience/gix029)
* 統合TV「DBCLS SRAを使ってNGSデータを検索する」[DOI: 10.7875/togotv.2014.097](http://doi.org/10.7875/togotv.2014.097)
