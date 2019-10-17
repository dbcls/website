# DBCLS用共通フッタの導入方法
各サービスのhtmlの`<body>`タグの直後に下記コードを記載する。

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-footer/script/common-footer.js"
	id="common-footer__script"
></script>
```
  
## ライセンス
上記設定ではクリエイティブ・コモンズの表記はありません。任意のライセンスのバージョンを表示するには以下をお使いください。

#### CC-BY-2.1-JP
``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-page-type="2.1"
></script>
```

#### CC-BY-SA-2.1-JP
``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-page-type="sa_2.1"
></script>
```

#### CC-BY-4.0
``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-page-type="4.0"
></script>
```

#### ライセンス表記なし
``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-page-type="none"
></script>`
```


## ライセンスの発行・更新年
上記スクリプトタグに以下のデータ属性を追加することで、発行・更新年を指定できます。デフォルト値は今年となっています。

``` html
	data-year="2000"
```


## フッタの簡略表示
上記スクリプトタグに以下のデータ属性を追記することで、フッタを1行の簡略表示にできます。デフォルト値はフル表示となっています。

``` html
	data-footer-design="simple"
```


## 日本語版、英語版の切り替え
共通ヘッダはhtmlタグ内のlang属性を読み込み、それに応じて言語を切り替えることができる。言語切り替えが機能しない場合は、サービスの各ページのhtmlに下記のようにlang属性を記述する。

- 日本語の場合： `<html lang="ja">`
- 英語の場合： `<html lang="en">`

## このディレクトリ内のファイル一覧
  - script
      - common-footer.js
        - フッタ表示用javascript
