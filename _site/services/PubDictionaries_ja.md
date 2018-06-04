# PubDictionaries

### PubDictionariesとは
* **テキストマイニング**のため開発された**辞書**の**公開レポジトリ**です。
* PubDictionaries上に登録されている辞書を使って**テキストの自動アノテーション**が出来ます。

### 辞書とは
* PubDictionariesで辞書とはラベル（自然言語表現）とデータベースIDのペアの集まりです。
* 言い換えますと、データベースエントリとそれの自然言語の表現の間のマッピングテーブルとも言えます。

<p align="center"> 
<img src="https://raw.githubusercontent.com/dbcls/master/services/images/DBCLSservices_PubDictionaries_fig-1_180603.png">
</p>

### 使い方
* 誰でも辞書を提供するのが出来ます。
* TSV (tab-separated values)フォーマットの辞書を受け取ります。.
* 提供された辞書を使ってすぐテキストをアノテーションするのが出来ます。

<p align="center"> 
<img src="https://raw.githubusercontent.com/dbcls/master/services/images/DBCLSservices_PubDictionaries_fig-2_180603.png">
</p>
