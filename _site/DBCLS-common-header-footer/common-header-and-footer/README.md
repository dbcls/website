# DBCLS用共通ヘッダ+フッタの導入方法

1. 各サービスのhtmlの`<head>`タグの最後に下記コードを記載する。
  - `<link rel="stylesheet" href="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/style/common-header-and-footer.css">`
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js"></script>`
  - `<meta name="viewport" content="width=device-width,initial-scale=1">`
    - モバイル対応用
    - <head>タグ内の<title>タグより、上に記載する。

2. 各サービスのhtmlの`<body>`タグ内の最初に下記コードを記載する。
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
  - common-footer.html
    - フッタ表示用のHTMLファイル(日本語)
  - common-footer-en.html
    - フッタ表示用のHTMLファイル(英語)
  - img/
    - by.svg
      - フッタ用CC-BY用アイコン画像
    - logo-short-2.svg
      - ヘッダ用DBCLSロゴ画像
    - logo_dbcls.svg
      - フッタ用DBCLSロゴ画像
  - script
      - common-header-and-footer.js
        - ヘッダ・フッタ表示用javascript
  - style
      - common-header-and-footer.css
        - ヘッダ・フッタ表示用css



