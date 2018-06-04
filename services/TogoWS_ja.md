# TogoWS

TogoWS は様々な主要な生命科学の公共データベースに、同じ形式の REST API でキーワード検索、エントリ取得を行うことができるサービスです。

TogoWS は BioPerl, BioRuby や Ruby UCSC API を内蔵しており、エントリのフォーマット変換や部分取得、UCSC データベースからのデータ取得にも対応しています。

また外部サービスのモニタリングを 2013 年から継続しており、ウェブサービスの安定性を記録しています。

## URL

http://togows.org/

### 検索

* http://togows.org/search/ →  対象 DB 一覧
* http://togows.org/search/database/query+string[/offset,limit][.format]

### 取得

* http://togows.org/entry/ →  対象 DB 一覧
* http://togows.org/entry/database/entry_id[,entry_id2,...][/field][.format]

### 変換

* http://togows.org/convert/ → 対応形式一覧
* http://togows.org/convert/data_source.format

### ログ

* http://togows.org/monitor/

## スクリーンショット

![Fig-1](https://raw.githubusercontent.com/dbcls/master/services/images/TogoWS_fig-1.png)

