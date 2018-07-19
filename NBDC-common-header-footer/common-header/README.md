# NBDC用共通ヘッダの導入手順

1. 共通ヘッダを導入するサービスのサーバに、このディレクトリ内の各ファイルをコピーする。
  - common-header.html
    - ヘッダ表示用のHTMLファイル(日・英共通)
  - img/
    - logo-short-2.svg
      - ヘッダ用NBDCロゴ画像
  - script
      - common-header.js
        - ヘッダ表示用javascript
  - style
      - common-header.css
        - ヘッダ表示用css
2. 各ファイルは、必要に応じて適切なディレクトリに設置する。
  - `script`、`style`、`img`の各ファイルは、各サービスのサーバ上のjs、css、imgファイルが置かれているディレクトリにそれぞれ設置する。

3.  各サービスのhtmlの`<head>`タグ内に下記コードを記載する。
  - `<link rel="stylesheet" href="style/common-header.css">`
    - - `2.`でcssファイルの設置場所を変更した場合は、上記コードに記述する`href`のパスを適宜変更する。
  - `<script type="text/javascript" src="script/common-header.js"></script>`
    - - `2.`でjsファイルの設置場所を変更した場合は、上記コードに記述する`src`のパスを適宜変更する。
