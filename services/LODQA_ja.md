# LODQA

### LODQAとは
* LODQAは**Linked Open Data Questin Answering**の訳語です。
* 自然言語を使ってRDFデータの検索ができるようにするウェブサービスです。
http://lodqa.org

### LODQAの特徴
* LODQAはある特定のRDFデータのために開発されてないため、さまざまなRDFデータに柔軟に対応できます。
  * あるデータのためのconfigurationを作成するためのインタフェースが公開されていて、作成されたconfigurationの登録も自由に出来ます。
* 現在実装されている検索アルゴリズムは遅いですが極めて高いrecallを示します。
  * 高いrecallを保ちながら速度を早くしていく方向で開発を続けています。

### スクリーンショット
![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_LODQA_fig-1_180604.png)

### 参考文献

* Jin-Dong Kim and Kevin Bretonnel Cohen
    **Triple Pattern Variation Operations for Flexible Graph Search, Jin-Dong Kim and Kevin Bretonnel Cohen**, The 1st international workshop on Natural Language Interfaces for Web of Data (NLIWoD), 2014
