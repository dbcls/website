# SPARQList

SPARQList は SPARQL クエリを実行し、その結果を JavaScript で加工して返すことのできる REST API サーバです。API の設定は Markdown 形式のドキュメントとして記述することができ、API のパラメータ、SPARQL エンドポイント、SPARQL クエリ、および、content-type negotiaion やデータ構造の変換のための JavaScript 関数を、自由記述の説明文とともに定義することができます。SPARQList サーバは複数の API を提供できるため、再利用可能な SPARQL クエリのドキュメント付きレポジトリとして活用することができます。  
https://github.com/dbcls/sparqlist

## Docker バージョンの起動

```sh
$ docker run dbcls/sparqlist
```

## 設定

ローカル環境へのインストールと設定可能なオプションについては [GitHub](https://github.com/dbcls/sparqlist) を参照してください。

## スクリーンショット

### API のリスト

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQList_fig-1.png)

### API の実行画面

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQList_fig-2.png)

### Markdown による API のソース表示

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQList_fig-3.png)

### Markdown 編集画面

![Fig-4](https://raw.githubusercontent.com/dbcls/website/master/services/images/SPARQList_fig-4.png)
