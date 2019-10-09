# DBCLS用共通ヘッダ+フッタの導入方法
各サービスのhtmlの`<body>`タグの直後に下記コードを記載する。

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
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


## ヘッダの種類
ヘッダ内のメニュー項目は、初期状態では右上隅のアイコンに折りたたまれています。上記スクリプトタグに以下のデータ属性を追記することで、ヘッダ内メニュー項目をあらかじめ表示させることができます。

``` html
	data-header-menu-type="deployed"
```


## ヘッダの色
上記スクリプトタグに以下のデータ属性を追記することで、ヘッダの背景色をモノクロームにできます。デフォルト値は紺色となっています。

``` html
	data-color="mono"
```


## フッタの表示
初期状態ではフッタは非表示です。上記スクリプトタグに以下のデータ属性を追記することで、フッタを表示できます。

``` html
	data-show-footer="true"
```


## フッタでのリンクの表記
初期状態ではフッタに *Contact* および *Site policy* のリンクはありません。上記スクリプトタグに以下のデータ属性を追記することで、リンクを表記することができます。。

``` html
	data-show-footer-links="true"
```


## フッタでのライセンス表記
初期状態ではクリエイティブ・コモンズの表記はありません。上記スクリプトタグに以下のデータ属性を追記することで、クリエイティブ・コモンズを表示できます。

``` html
	data-show-footer-license="true"
```


## クリエイティブ・コモンズの種別
任意のライセンスのバージョンを表示するには以下をお使いください。

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


## 日本語版、英語版の切り替え
共通ヘッダはhtmlタグ内のlang属性を読み込み、それに応じて言語を切り替えることができる。言語切り替えが機能しない場合は、サービスの各ページのhtmlに下記のようにlang属性を記述する。

- 日本語の場合： `<html lang="ja">`
- 英語の場合： `<html lang="en">`


## このディレクトリ内のファイル一覧
  - img/
    - logo-short-2.svg
      - ヘッダ用DBCLSロゴ画像
    - logo_dbcls.svg
      - フッタ用DBCLSロゴ画像
    - menu.svg
      - モバイル用メニューアイコン画像
  - script
      - common-header-and-footer.js
        - ヘッダ・フッタ表示用javascript
  - style
      - common-header-and-footer.css
        - ヘッダ・フッタ表示用css
