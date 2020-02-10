# 標準的なDBCLS用共通ヘッダの導入方法
各サービスのhtmlの`<body>`タグの直後に下記コードを記載する。

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
></script>
```

## 以下は共通ヘッダ・フッタの各種バリエーションの導入方法となります

#### ヘッダ（リンク表示）

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-header-menu-type="deployed"
></script>
```

#### ヘッダ（リンクメニュー記号）+フッタ

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-show-footer="true"
></script>
```

#### ヘッダ（リンクメニュー記号）+フッタ（ライセンス）

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-show-footer="true"
	data-show-footer-license="true"
></script>
```

#### ヘッダ（リンクメニュー記号）+フッタ（ライセンス・リンク）

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-show-footer="true"
	data-show-footer-license="true"
	data-show-footer-links="true"
></script>
```

#### ヘッダ（リンク表示）+フッタ

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-header-menu-type="deployed"
	data-show-footer="true"
></script>
```

#### ヘッダ（リンク表示）+フッタ（ライセンス）

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-header-menu-type="deployed"
	data-show-footer="true"
	data-show-footer-license="true"
></script>
```

#### ヘッダ（リンク表示）+フッタ（ライセンス・リンク）

``` html
<script
	type="text/javascript"
	src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"
	style="display: block"
	id="common-header-and-footer__script"
	data-header-menu-type="deployed"
	data-show-footer="true"
	data-show-footer-license="true"
	data-show-footer-links="true"
></script>
```


## ライセンス
上記設定ではクリエイティブ・コモンズの表記はありません。任意のライセンスのバージョンを表示するには以下をお使いください。

#### CC-BY-2.1-JP
``` html
data-license-type="2.1"
```

#### CC-BY-SA-2.1-JP
``` html
data-license-type="sa_2.1"
```

#### CC-BY-4.0
``` html
data-license-type="4.0"
```

#### ライセンス表記なし
``` html
data-license-type="none"
```


## ライセンスの発行・更新年
上記スクリプトタグに以下のデータ属性を追加することで、発行・更新年を指定できます。デフォルト値は今年となっています。

``` html
data-year="2000"
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
