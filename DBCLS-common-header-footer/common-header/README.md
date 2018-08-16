# DBCLS用共通ヘッダの導入方法

1. 各サービスのhtmlの`<head>`タグの最後に下記コードを記載する。
  - `<link rel="stylesheet" href="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header/style/common-header.css">`
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header/script/common-header.js"></script>`
  - `<meta name="viewport" content="width=device-width,initial-scale=1">`
    - モバイル対応用
    - <head>タグ内の<title>タグより、上に記載する。

2. 各サービスのhtmlの`<body>`タグを`<body style="padding-top: 24px;>`に書き換える

3. 各サービスのhtmlの`<body>`タグ内の最初に下記コードを記載する。
`<header style="z-index:9999;position:fixed;top:0;left:0;width:100%;height:24px;background:linear-gradient(#004098, #1B2244);"></header>`

## 日本語版、英語版の切り替え
  - 共通ヘッダはhtmlタグ内のlang属性を読み込み、それに応じて言語を切り替えることができる。言語切り替えが機能しない場合は、サービスの各ページのhtmlに下記のようにlang属性を記述する。
    - 日本語の場合： `<html lang="ja">`
    - 英語の場合： `<html lang="en">`

## ヘッダのロゴ・メニュー表示位置を左詰めに調整する方法
  - cssファイルの`.dbcls-common-header nav.gnav`の記述を下記のように変更する。
　
```
.dbcls-common-header nav.gnav {
/*  width: 1024px;
  margin: 0 auto; */
  margin-left: 16px;
  align-items: center;
  justify-content: space-between;
}
```

## このディレクトリ内のファイル一覧
  - common-header.html
    - ヘッダ表示用のHTMLファイル(日・英共通)
  - img/
    - logo-short-2.svg
      - ヘッダ用DBCLSロゴ画像
  - script
      - common-header.js
        - ヘッダ表示用javascript
  - style
      - common-header.css
        - ヘッダ表示用css


