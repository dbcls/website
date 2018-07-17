# DBCLS用共通ヘッダ+フッタの導入手順

1. 共通ヘッダ・フッタを導入するサービスのサーバに、このディレクトリ内の各ファイルをコピーする。
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
2. 各ファイルは、必要に応じて適切なディレクトリに設置する。
  - `script`、`style`、`img`の各ファイルは、各サービスのサーバ上のjs、css、画像ファイルが置かれているディレクトリに設置する。

3.  各サービスのhtmlの`<head>`タグの中に下記コードを記載する
  - `<link rel="stylesheet" href="style/common-header-and-footer.css">`
  - `<script type="text/javascript" src="script/common-header-and-footer.js"></script>`
  - `2.`で各ファイルの設置場所を変更した場合は、上記コードに記述する`href`や`src`以下のパスを適宜変更する。
