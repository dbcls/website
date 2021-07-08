# TogoID
## TogoID とは
TogoID は 生命科学分野におけるデータベース(DB)のID間の対応関係を検索および変換することができるウェブアプリケーションです。(https://togoid.dbcls.jp/)


## TogoID の特徴
- 利用者の持つIDあるいはIDリスト(数十から数千〜)を入力することで、変換可能なDBが列挙され、対応するIDに変換することができます。1対1のID変換だけでなく、数珠つなぎのように複数のDB間をまたぐ変換も可能です。
- TogoIDでは、変換されたIDをすぐに他のサービスで利用できるようクリップボードにコピーする機能があるほか、変換されたIDリスト、IDに対応するURL、そして変換経路のすべてのIDを含むデータをCSV形式でダウンロードすることができます。
- ID間の対応関係は、各DBのRDFデータ、API、フラットファイルからの抽出によって整備しており、2021年7月現在、60以上のDB、150以上のIDペアが対象になっています(随時拡張中)。対象DBのIDに関するメタデータや、IDペアの更新方法、更新頻度などを管理することで、常に最新のID間の対応関係を得られるようにしています。
    - [https://github.com/dbcls/togoid-config](https://github.com/dbcls/togoid-config)
- ウェブインターフェイスだけでなく、APIも用意しており、他のアプリケーションからのID変換にも利用することができます。
    - 例1: [https://api.togoid.dbcls.jp/convert?ids=5460,6657,9314,4609&route=ncbigene,ensembl_gene&format=json](https://api.togoid.dbcls.jp/convert?ids=5460,6657,9314,4609&route=ncbigene,ensembl_gene&format=json)
    - 例2: [https://api.togoid.dbcls.jp/convert?ids=5460,6657,9314,4609&route=ncbigene,ensembl_gene,uniprot&format=json](https://api.togoid.dbcls.jp/convert?ids=5460,6657,9314,4609&route=ncbigene,ensembl_gene,uniprot&format=json)
    - 例3: [https://api.togoid.dbcls.jp/convert?format=json&include=pair&route=pubchem_compound,chebi,reactome_reaction,uniprot,ncbigene&ids=649](https://api.togoid.dbcls.jp/convert?format=json&include=pair&route=pubchem_compound,chebi,reactome_reaction,uniprot,ncbigene&ids=649)


## スクリーンショット

### トップページからID変換

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_fig-1_20210707.png)

### ID変換の結果

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_fig-2_20210707.png)

### 収載DBのIDに関する情報

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_fig-3_20210707.png)


