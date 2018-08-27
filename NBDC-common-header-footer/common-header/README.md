# NBDC用共通ヘッダの導入方法
1. 各サービスのhtmlの`<body>`タグの直後に下記コードを記載する。
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/NBDC-common-header-footer/common-header/script/common-header.js" style="display: block" id="common-header__script"></script>`

## 日本語版、英語版の切り替え
  - 共通ヘッダはhtmlタグ内のlang属性を読み込み、それに応じて言語を切り替えることができる。言語切り替えが機能しない場合は、サービスの各ページのhtmlに下記のようにlang属性を記述する。
    - 日本語の場合： `<html lang="ja">`
    - 英語の場合： `<html lang="en">`

## ヘッダのロゴ・メニュー表示位置を左詰めに調整する方法
  - 上記で追加した`<script>`タグの下に以下のコードを記述する。
　
```
  <style>
    #nbdc-common-header nav.gnav {
      margin: 0;
    }
  </style>
```

## このディレクトリ内のファイル一覧
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


