# DBCLS用共通フッタの導入手順

1. 共通フッタを導入するサービスのサーバに、このディレクトリ内の各ファイルをコピーする。
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
2. 各ファイルは、必要に応じて適切なディレクトリに設置する。
  - `script`、`style`、`img`の各ファイルは、各サービスのサーバ上のjs、css、imgファイルが置かれているディレクトリにそれぞれ設置する。

3.  各サービスのhtmlの`<head>`タグ内に下記コードを記載する。
  - `<link rel="stylesheet" href="style/common-footer.css">`
    - - `2.`でcssファイルの設置場所を変更した場合は、上記コードに記述する`href`のパスを適宜変更する。
  - `<script type="text/javascript" src="script/common-footer.js"></script>`
    - - `2.`でjsファイルの設置場所を変更した場合は、上記コードに記述する`src`のパスを適宜変更する。


## 日本語版、英語版の切り替え
- 共通ヘッダはhtmlタグ内のlang属性を読み込み、それに応じて言語を切り替えることができる。言語切り替えが機能しない場合は、サービスの各ページのhtmlに下記のようにlang属性を記述する。
- 日本語の場合： `<html lang="ja">`
- 英語の場合： `<html lang="en">`
