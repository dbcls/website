# TogoTable
### TogoTable とは

TogoTable は、excel などの表形式データに記載されているバイオデータベースのID番号やアクセッション番号からアノテーション情報をネットワーク経由で取得し、元の表形式データに追加するウェブアプリケーションです。 (http://togotable.dbcls.jp/)  

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoTable_fig-1_180530.png)  

### TogoTable の特徴

* 表形式データに記載されている ID 番号やアクセッション番号から、関連するアノテーション情報をまとめて取得して表に追加します。
* データベースをまたいでアノテーション情報を取得することもできます。(UniProt のアクセッション番号から PDB のアノテーション情報を取得する、等)
* 複数行のデータを一度に取得できます。
* カラムの入れ替え、表示/非表示、ソートなども可能です。
* 取得した結果をダウンロードして、EXCEL などで表示することができます。

### TogoTableの使い方

1. タブ区切り形式のファイルを準備します(EXCEL の場合タブ区切りテキストを指定して保存)。
2. TogoTable のページ (http://togotable.dbcls.jp/) から表データファイルをアップロードします。
3. ID 番号もしくはアクセッション番号が記載されているセルをクリックします。
4. クリックした ID/アクセッション番号がどのデータベースのものかを指定します。
5. 取得したいアノテーション情報が記載されているデータベースを指定します。
6. 取得したいアノテーション項目を指定します。
7. 「merge」ボタンをクリックすると、表の右側に指定したアノテーション項目が追加されます。
8. 「Output tsv」ボタンをクリックして、取得した結果をダウンロードします。

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoTable_fig-2_180530.png)

### 利用例

* blast 検索でヒットしてきた複数のタンパク質の詳細な情報を UniProt から取得する。
* PubMed ID からその論文に記載されているタンパク質のリストを取得する。


### 今後の開発予定

* アノテーション情報を取得できるデータベースを拡大していく予定です。

### 参考文献

* Shin Kawano, Tsutomu Watanabe, Sohei Mizuguchi, Norie Araki, Toshiaki Katayama and Atsuko Yamaguchi
    **TogoTable: cross-database annotation system using the Resource Description Framework (RDF) data model**
    Nucleic Acid Research, 42, W442-W448 (2014).
    [DOI: 10.1093/nar/gku403](https://doi.org/10.1093/nar/gku403)
* 河野 信 「TogoTable: 表形式データにアノテーションを付加するウェブツール」 バイオサイエンスとインダストリー, 73, 52-53 (2015).


<!--:-->
