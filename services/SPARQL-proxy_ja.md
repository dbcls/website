# SPARQL-proxy

SPARQL-proxy は SPARQL エンドポイントに対して下記のような機能をもたせるプロキシーサーバです。

* SPARQL クエリの安全性検証（更新系のクエリを除外）
* 同時に大量の SPARQL リクエストがあった場合のジョブ管理
* 実行時間のかかる SPARQL クエリのキャンセル
* 同じ SPARQL クエリに対する結果のキャッシュ機能
* SPARQL クエリのログ取得機能
* 結果が膨大となる SPARQL クエリの自動分割実行（試験実装）

## Docker バージョンの起動

```sh
$ docker run -p 8080:3000 -e SPARQL_BACKEND=http://example.com/sparql dbcls/sparql-proxy
```

## 設定

ローカル環境へのインストールと設定可能なオプションについては [GitHub](https://github.com/dbcls/sparql-proxy) を参照してください。

## スクリーンショット

### SPARQL 実行画面

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQL-proxy_fig-1.png)

### SPARQL-proxy 管理画面

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQL-proxy_fig-2.png)



