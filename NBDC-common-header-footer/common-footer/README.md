# NBDC用共通フッタの導入方法
1. 各サービスのhtmlの`<body>`タグの直後に下記コードを記載する。
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/NBDC-common-header-footer/common-footer/script/common-footer.js" id="common-footer__script"></script>`

  CC表記の場合は以下を使用してください。
  <2.1>
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/NBDC-common-header-footer/common-footer/script/common-footer.js" id="common-footer__script" data-page-type="2.1"></script>`

  <SA 2.1>
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/NBDC-common-header-footer/common-footer/script/common-footer.js" id="common-footer__script" data-page-type="sa_2.1"></script>`

  <4.0>
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/NBDC-common-header-footer/common-footer/script/common-footer.js" id="common-footer__script" data-page-type="4.0"></script>`

<ライセンス表記なし>
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/NBDC-common-header-footer/common-footer/script/common-footer.js" id="common-footer__script" data-page-type="none"></script>`

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
    - logo_nbdc.png
      - フッタ用NBDCロゴ画像
  - script
      - common-footer.js
        - フッタ表示用javascript
  - style
      - common-footer.css
        - フッタ表示用css




