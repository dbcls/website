# RDFized Life Science Dictionary
### RDFized Life Science Dictionary（LSD）とは
京都大学の金子周司先生が代表を務めるLSDプロジェクトで編纂された辞書のRDF版です。  
http://lsd.dbcls.jp/

### RDFized Life Science Dictionaryの特徴

#### あのLSDにSPARQLでアクセス可能

* 生命科学分野において広く利用されているLSDにSPARQLを用いてアクセスできます。

#### Linked Dataのため関連データも効率よく取得可能

* 各見出し語はMeSHなど関連データへのリンクが含まれるRDFデータセットとして取得できます。

#### オントロジーを利用した検索が容易
* 各見出し語は全てOWLで記述されたオントロジーと関連付けられているので、類義語などクラス情報を用いた検索も用意しています。

### 利用例

* 生命科学分野の論文データにLSDの見出し語を機械的な処理で関連付ける。

* 生命科学分野の英語の文書に対して、LSDを用いて対応する日本語やMeSHタームによるアノテーションを行う。

* PubMedにおける共起情報から得られた類似関連語をSPARQLを用いて取得する。

### 今後の開発予定

LSDプロジェクトにより辞書が更新された場合には適宜RDFデータも更新する予定です。またWikidataなど、関連データへのリンクも増やしていく予定です。
