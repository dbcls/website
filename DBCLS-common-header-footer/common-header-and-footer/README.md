# DBCLS用共通ヘッダ+フッタの導入方法
1. 各サービスのhtmlの`<body>`タグの直後に下記コードを記載する。
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js" style="display: block" id="common-header-and-footer__script"></script>`

#### 上記設定のデフォルトのライセンス表記はCC-BY-4.0になっています。ライセンスのバージョンがそれ以外の場合は以下をお使いください。

#### CC-BY-2.1-JP
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js" style="display: block" id="common-header-and-footer__script" data-page-type="2.1"></script>`

#### CC-BY-SA-2.1-JP
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js" style="display: block" id="common-header-and-footer__script" data-page-type="sa_2.1"></script>`

#### ライセンス表記なし
  - `<script type="text/javascript" src="https://dbcls.rois.ac.jp/DBCLS-common-header-footer/common-header-and-footer/script/common-header-and-footer.js" style="display: block" id="common-header-and-footer__script" data-page-type="none"></script>`


## 日本語版、英語版の切り替え
  - 共通ヘッダはhtmlタグ内のlang属性を読み込み、それに応じて言語を切り替えることができる。言語切り替えが機能しない場合は、サービスの各ページのhtmlに下記のようにlang属性を記述する。
    - 日本語の場合： `<html lang="ja">`
    - 英語の場合： `<html lang="en">`

## ヘッダのロゴ・メニュー表示位置を左詰めに調整する方法
  - 上記で追加した`<script>`タグの下に以下のコードを記述する。
　
```
  <style>
    #dbcls-common-header nav.gnav {
      margin: 0;
    }
  </style>
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




