# 高速塩基配列検索GGGenome

### GGGenomeとは

ゲノムや転写産物等の塩基配列を高速に検索するツールです。  
GGGenome： https://GGGenome.dbcls.jp/

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSServices_GGGenome.png)

### GGGenomeの特徴

* BLASTやBLATでは検索の難しい20塩基以下の短い配列の検索が得意です。
* ミスマッチやギャップを含む塩基配列もすばやく検索できます。
* ゲノムの検索は、主要なモデル生物を含む350以上の生物種に対応しています。
* 転写産物の検索は、NCBI RefSeqに収録された全生物種のmRNA、ncRNAを検索できます。
* 検索結果をさまざまなフォーマットで取得することができます。

### REST APIの提供

```
URI: http[s]://GGGenome.dbcls.jp/db/k/strand/sequence[.format][.download]
```

* `db` : 検索対象データベース　例） ヒトゲノム`hg38`, マウスゲノム`mm10`, RefSeq転写産物`refseq` など
* `k` : 許容するミスマッチまたは挿入欠失の数。省略時は0
* `strand` : `+`,`plus` または `-`,`minus` で特定方向のみ検索
* `sequence` : 検索する塩基配列
* `format` : `html`,`txt`,`csv`,`bed`,`gff`,`json` (省略時は`html`)
* `download` : 検索結果をファイルとしてダウンロード (`txt`,`csv`,`bed`,`gff`,`json`のみ)

### 関連プロジェクト

* 統合遺伝子検索GGRNA (https://GGRNA.dbcls.jp/)  
  遺伝子をGoogleのように検索できるウェブサーバ

* CRISPRdirect (https://crispr.dbcls.jp/)  
  ゲノム編集のためのガイドRNA設計ウェブサーバ

### 参考文献

* 統合TV「高速配列検索GGGenome《ゲゲゲノム》の使い方」 DOI: [10.7875/togotv.2013.071](https://doi.org/10.7875/togotv.2013.071)
* 統合TV「GGGenome 《ゲゲゲノム》 で転写因子結合サイトを検索してゲノムブラウザに表示する」 DOI: [10.7875/togotv.2015.067](https://doi.org/10.7875/togotv.2015.067)
