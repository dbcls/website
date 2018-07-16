# common header 導入手順

1. common-header内のファイルをプロジェクトのディレクトリにコピー&ペーストする
(必要に応じてscript, styleフォルダの中身はそれぞれのプロジェクトファイルのjs,cssファイルが置かれているディレクトリに格納してください。その場合、以下のhref, src以下のパスのディレクトリ名、style, scriptは変更して下さい。)

2. `<link rel="stylesheet" href="style/common-header.css">` を`<head>`タグの中に追加する

3. `<script type="text/javascript" src="script/common-header.js"></script>` を`<head>`タグの中に追加する