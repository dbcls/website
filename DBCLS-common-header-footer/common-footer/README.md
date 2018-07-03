# common footer 導入手順

1. common-footer内のファイルをプロジェクトのディレクトリにコピー&ペースト
(必要に応じてscript, styleフォルダの中身はそれぞれのプロジェクトファイルのjs,cssファイルが置かれているディレクトリに格納してください。その場合、以下のhref, src以下のパスのディレクトリ名、style, scriptは変更して下さい。)

2. `<link rel="stylesheet" href="style/common-footer.css">` を`<header>`タグの中に追加する

3. `<script type="text/javascript" src="script/common-footer.js"></script>` を`<head>`タグの中に追加する
