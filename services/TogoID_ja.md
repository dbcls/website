# TogoID
## TogoID とは
TogoID は 生命科学分野におけるデータベース(DB)のID間の対応関係を検索および変換することができるウェブアプリケーションです。(https://togoid.dbcls.jp/)


## TogoID の特徴
- IDリストを入力することで、直接変換可能なDBが列挙され、対応するIDに変換することができます。1対1のID変換だけでなく、あるDBを経由してさらに他のDBのIDに変換することも可能です。
- 遺伝子、タンパク質、バリアント、疾患、パスウェイ、化合物、立体構造、実験サンプル、細胞株、文献など、幅広いカテゴリーのDBを対象としています。
- 等価なものに対するID間の変換だけでなく、「バリアントが位置する遺伝子」のように、何らかの生物学的意味で関係する別概念のIDに変換することも可能です。関係の意味はオントロジーで整理しており、ウェブUI上ではDB間をつなぐ矢印上に意味が表示されます。
- 変換結果は、CSVやTSVの形式でダウンロードしたりクリップボードにコピーしたりできます。
- ID間の対応関係は、各DBのRDFデータ、API、フラットファイルからの抽出によって整備しており、2024年10月現在、70以上のDBが対象になっています。
- データは毎週定期更新を行っており、常に最新に近いデータを参照して変換できます。
- 遺伝子シンボルや疾患名など、ID に対するラベルを表示することができます。一部のデータセットでは、ラベルをIDに変換することもできます。
- 対象DBのIDに関するメタデータや、IDペアの取得方法は、GitHub レポジトリ TogoID-config ([https://github.com/togoid/togoid-config](https://github.com/togoid/togoid-config)) で管理しています。また、誰でも新規のIDペアの取得方法を追加して、プルリクエストを送ることができます。
- ウェブインターフェイスだけでなく、APIも用意しており、他のアプリケーションからのID変換にも利用することができます。
    - 例: [NCBI Gene ID を UniProt ID 経由で PDB ID に変換した結果を json で取得する](https://api.togoid.dbcls.jp/convert?ids=5460,6657,9314,4609&route=ncbigene,uniprot,pdb&format=json&report=full)

## スクリーンショット

### 探索的にID変換 (EXPLOREモード)

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig1_20220520.jpg)

### 変換したいデータセットへのパスを検索してID変換 (NAVIGATEモード)

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig2_20220520.jpg)


### ID変換の結果

![Fig-4](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig4_20241025.jpg)

### ラベルをIDに変換 (LABEL2ID)

![Fig-5](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig5_20241025.jpg)

### 収載DBのIDに関する情報

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/TogoID_Fig3_20241025.jpg)


### 参考文献

* Shuya Ikeda, Hiromasa Ono, Tazro Ohta, Hirokazu Chiba, Yuki Naito, Yuki Moriya, Shuichi Kawashima, Yasunori Yamamoto, Shinobu Okamoto, Susumu Goto, Toshiaki Katayama
    **TogoID: an exploratory ID converter to bridge biological datasets.**
    Bioinformatics, 2022, btac491.
    [DOI: 10.1093/bioinformatics/btac491](https://doi.org/10.1093/bioinformatics/btac491)
* 池田　秀也, 小野 浩雅
    **TogoID：生命科学系データベースのさまざまなIDを探索的に変換できるウェブアプリケーション**
    実験医学2022年5月号　クローズアップ実験法
    [DOI: 10.18958/7013-00005-0000134-00](https://doi.org/10.18958/7013-00005-0000134-00)

<!--:-->
