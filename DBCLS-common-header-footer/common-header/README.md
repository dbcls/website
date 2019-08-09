# DBCLS用共通ヘッダの導入方法
各サービスのhtmlの`<body>`タグの直後に下記コードを記載する。

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header/script/common-header.js"
	style="display: block"
	id="common-header__script"
></script>
```
  
## ヘッダの横幅
上記スクリプトタグに以下のデータ属性を追記することで、ヘッダの横幅をコントロールできます。デフォルト値は1024pxとなっています。

#### ウィンドウ幅960pxの場合
``` html
	data-width="960"
```

#### ウインドウ幅に合わせる場合
``` html
	data-width="auto"
```


## ヘッダの色
上記スクリプトタグに以下のデータ属性を追記することで、ヘッダの背景色をモノクロームにできます。デフォルト値は紺色となっています。

``` html
	data-color="mono"
```


## 日本語版、英語版の切り替え
共通ヘッダはhtmlタグ内のlang属性を読み込み、それに応じて言語を切り替えることができる。言語切り替えが機能しない場合は、サービスの各ページのhtmlに下記のようにlang属性を記述する。

- 日本語の場合： `<html lang="ja">`
- 英語の場合： `<html lang="en">`

## ヘッダのロゴ・メニュー表示位置を左詰めに調整する方法
上記で追加した`<script>`タグの下に以下のコードを記述する。

``` html
  <style>
    #dbcls-common-header nav.gnav {
      margin: 0;
    }
  </style>
```

## このディレクトリ内のファイル一覧
  - script
      - common-header.js
        - ヘッダ・フッタ表示用javascript
