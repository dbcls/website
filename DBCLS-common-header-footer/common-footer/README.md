# DBCLS用共通フッタの導入方法

1. 各サービスのhtmlの`<head>`タグの最後に下記コードを記載する。
  - `<link rel="stylesheet" href="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-footer/style/common-footer.css">`
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-footer/script/common-footer.js"></script>`
  - `<meta name="viewport" content="width=device-width,initial-scale=1">`
    - モバイル対応用
    - <head>タグ内の<title>タグより、上に記載する。

## 日本語版、英語版の切り替え
  - 共通ヘッダはhtmlタグ内のlang属性を読み込み、それに応じて言語を切り替えることができる。言語切り替えが機能しない場合は、サービスの各ページのhtmlに下記のようにlang属性を記述する。
    - 日本語の場合： `<html lang="ja">`
    - 英語の場合： `<html lang="en">`

## このディレクトリ内のファイル一覧
  - common-footer.html
    - フッタ表示用のHTMLファイル(日本語)
  - common-footer-en.html
    - フッタ表示用のHTMLファイル(英語)
  - img/
    - by.svg
      - フッタ用CC-BY用アイコン画像
    - logo_dbcls.svg
      - フッタ用DBCLSロゴ画像
  - script
      - common-footer.js
        - フッタ表示用javascript
  - style
      - common-footer.css
        - フッタ表示用css




