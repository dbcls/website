# BodyParts3D/Anatomography
### BodyParts3D/Anatomographyとは

誰でもウエブ上でカスタム解剖図を作成し交換できるサービスです。作成した図は、論文に用いるなど自由に公開することが可能です。  
( http://lifesciencedb.jp/bp3d/ )

![fig-1](https://raw.githubusercontent.com/dbcls/master/services/images/DBCLSservices_bp3d_fig-1_180604.png)
![fig-2](https://raw.githubusercontent.com/dbcls/master/services/images/DBCLSservices_bp3d_fig-2_180604.png)

#### BodyParts3D/Anatomographyの特徴

* 解剖図構築キット（BodyParts3D）

* 三次元（3D）デジタル人体模型を解剖学的に分割したパーツセット。
* 解剖図エディタ（Anatomography）

* 上記キットのパーツを用いてカスタムモデルを構築し、そのモデルの『mapURL』を作成するためのウェブ・アプリケーション。この『mapURL』はパーマリンクURLとして保存やサイトへのコピー、プログラムへの埋め込みが自由に行えます。（Anatomographyサーバへのhttp通信が必要です）
* 解剖図API

* 『mapURL』の情報に基づいて、カスタムモデルを画像に変換するアプリケーション・プログラミング・インタフェース（API）。API仕様については下記URLをご覧ください。
* http://lifesciencedb.jp/bp3d/info_en/webapi/apidoc.html

#### BodyParts3D/Anatomography 4.0でできること

1.  独自の解剖図を作成し、それを『mapURL』として共有
2.  身体表面や内部の座標の「pin-URL」へのコーディング
3.  身体部位別データの自動的視覚化（階級区分図）
4.  地理マップ等他のAPIとのマップマッシュアップ・データ視覚化
5.  患者どうしによる共同のMapping作業
6.  複数の解剖図の編集

#### BodyParts3D/Anatomography 4.0の主な変更点

* 3次元人体モデルパーツの改良と追加

* 新たな臓器の追加とともに、全体の座標を見直しました。ファイル名も整理されています。
    （異なるバージョンのデータを併せて利用することはできません。）
* インターフェースの刷新

* ウェブサイトやメニューの構成も見直し、作業フローがわかりやすくなるようにしました。

#### 利用例

* このほかのモデル例についてはBodyPars3Dユーザガイドの『できること』などをご覧ください。
* http://lifesciencedb.jp/bp3d/info/userGuide/application/index.html

#### 参考文献

* Mitsuhashi, N., Fujieda, K., Tamura, T., Kawamoto, S., Takagi, T., & Okubo, K. (2009). [BodyParts3D: 3D structure database for anatomical concepts.](http://nar.oxfordjournals.org/content/37/suppl_1/D782) Nucleic acids research, 37(suppl 1), D782-D785.
* 統合TV「BodyParts3D/Anatomographyの使い方〜基本編〜」[DOI: 10.7875/togotv.2011.034](http://doi.org/10.7875/togotv.2011.134)
* 統合TV「BodyParts3D/Anatomographyの使い方〜実践編〜 臓器の位置関係を調べる」[DOI: 10.7875/togotv.2011.152](http://doi.org/10.7875/togotv.2011.152)
* 統合TV「BodyParts3D/Anatomographyの使い方〜実践編〜 3D画像の作成」[DOI: 10.7875/togotv.2011.153](http://doi.org/10.7875/togotv.2011.153)
* 統合TV「BodyParts3D/Anatomographyの使い方〜実践編〜 人体ヒートマップの作成」[DOI: 10.7875/togotv.2011.157](http://doi.org/10.7875/togotv.2011.157)
