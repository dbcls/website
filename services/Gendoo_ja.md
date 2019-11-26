### Gendooとは

遺伝子、疾患について、関連する疾患、薬剤、臓器、生命現象などの特徴をキーワードでリスト表示するツールです。

( http://gendoo.dbcls.jp/ )

![fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSServices_Gendoo_fig-1_180525.png)　
![fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSServices_Gendoo_fig-2_180525.png)

#### Gendooの特徴

* 遺伝子や疾患を関連するキーワードでプロファイリング

* 遺伝子や疾患についての論文を網羅的に収集。そこからキーワードを抽出しスコアリングすることで、遺伝子や疾患の特徴プロファイリングを行っています。

* Gene Ontology ではカバーしていない疾患、臓器などの用語をカバー

* 遺伝子の生物学的な特徴づけや解釈にはGene Ontology (GO) が一般的ですが、これは分子・細胞レベルの特徴語だけでした。Gendooを用いると、GOではわからない、疾患や臓器の観点からも特徴づけが行えます。

* 例：APP (amyloid beta precursor protein) → アルツハイマー病（疾患）、脳（臓器）

* 疾患もキーワードでプロファイリングしたことで特徴の比較が可能に

* たとえば、疾患のデータベースであるOMIM（Online Mendelian Inheritance in Man）は、疾患の態様が文章で書いてあるので、簡単に特徴の比較ができませんでした。Gendooを用いると、疾患どうし、遺伝子と疾患の特徴比較が簡単に行えます。（図は1型/2型糖尿病の例）


#### 利用例

* 見知らぬ遺伝子や疾患がどういうものか知りたいときに
* マイクロアレイや次世代シーケンサ（NGS)によるデータに生物学的な解釈を加える際に

#### 今後の開発予定

* インターフェースを改善します。
* NGSデータ解析により得られた遺伝子リストに対してエンリッチメント解析が行えるようにします。

#### 参考文献

* Nakazato, T., Bono, H., Matsuda, H., & Takagi, T. (2009). [Gendoo: functional profiling of gene and disease features using MeSH vocabulary.](http://nar.oxfordjournals.org/content/37/suppl_2/W166.full) Nucleic Acids Res. 2009 Jul;37(Web Server issue):W166-9. doi: 10.1093/nar/gkp483. Epub 2009 Jun 4.
* 統合TV「Gendooを利用して遺伝子と疾患の関連を調べる」[DOI: 10.7875/togotv.2012.080](http://doi.org/10.7875/togotv.2012.080)
