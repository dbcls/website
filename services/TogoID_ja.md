# TogoID
## TogoID とは
TogoID は データベース(DB)のID間のリンク情報を検索および変換することができるウェブツールです。(https://togoid.dbcls.jp/)


## TogoID の特徴
- 利用者の持つIDあるいはIDリスト(数十から数千〜)を入力することで、変換可能なIDが列挙されます。1対1のID変換だけでなく、数珠つなぎのように複数のID間をまたぐ変換も可能です。
- TogoIDでは、変換されたIDをすぐさま他のサービスで利用できるようクリップボードにコピーされる機能があるほか、IDリストのダウンロードやオリジナルDBへのリンクURLのダウンロード、そして変換経路のすべてのIDを含むデータをCSV形式で取得することができます。
- ID間リンク情報は、各DBが提供するRDFデータからSPARQL検索で抽出しているほか、API経由、オリジナルファイルからの変換などによって整備しており、2021年7月現在、ヒトに関するIDを対象に、60以上のDB、150以上のIDペアが対象になっています(随時拡張中)。対象DBのIDに関するメタデータやIDペアの更新方法、更新頻度などを整備することで、常に最新のID間リンク情報が得られるようにしています。
    - [https://github.com/dbcls/togoid-config](https://github.com/dbcls/togoid-config)

- API も同時に用意しており、他のアプリケーションからのID変換にも利用することができます。
    - 例: [https://api.togoid.dbcls.jp/convert?format=json&include=pair&route=pubchem_compound,chebi,reactome_reaction,uniprot,ncbigene&ids=649](https://api.togoid.dbcls.jp/convert?format=json&include=pair&route=pubchem_compound,chebi,reactome_reaction,uniprot,ncbigene&ids=649)


## スクリーンショット

### トップページからID変換

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_fig-1_20210614.png)

### ID変換の結果

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_fig-2_20210614.png)

### 収載DBのIDに関する情報

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_fig-3_20210614.png)


