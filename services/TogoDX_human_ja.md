# TogoDX/Human
## TogoDX とは
TogoDX (Togo Data eXplorer)は、知識グラフ(Knowledge graph)を用いて統合された、様々なデータベースを統合的に探索するためのフレームワークです。TogoDXでは、データセットごとに持つ多様な属性(attribute)によって絞り込みを行い、データサイエンスに有用なデータを柔軟に抽出する新しい仕組みの提供を目指しています。TogoDXは汎用的なフレームワークとして開発されており、ヒト以外のさまざまな種類のデータにも適用することが可能です。

### TogoDX概念図

<img src="https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDX_concept_20230921.png" width="720">

## TogoDX/Human について
TogoDX/Human は TogoDXのフレームワークを用いて、国内外のデータベースから収集・統合したヒトに関する情報をワンストップで探索することができるアプリケーションです。現在、遺伝子、タンパク質、化合物、疾患などの多様なデータベースに由来する50以上の属性を用いて、データの探索が行えます。各属性は階層分類または連続値分布として可視化されており、利用者は全データを俯瞰しながら興味ある属性を用いてデータを絞り込んだり、IDリストを入力することで、各属性におけるIDの分布を把握することができます。絞り込まれた結果表示では、そのIDに関連する情報を容易に確認できるほか、属性情報をダウンロードしてさらなる統合解析に利用することができます。
[https://togodx.dbcls.jp/human/](https://togodx.dbcls.jp/human/)


## TogoDX/Human の特徴
- 利用者の目的や興味に応じて、各属性の階層分類または連続値分布の一部を選択することにより、それらの条件を満たす結果（該当するタンパク質のリストなど）を取得できるため、研究対象の絞り込みに応用できます。
- 利用者の持つIDリスト（実験から得られた遺伝子のリストなど）を入力することで、各属性における分布を俯瞰的に把握したり、他の属性における想定外の繋がりや偏りから、実験結果の解釈や考察の一助となります。
- 絞り込んだ結果については、そのIDに関連する情報が容易に確認できるほか、属性情報をダウンロードしてさらなる統合解析に利用することができます。

## 活用事例
- ｢肺でタンパク質として発現が確認され、細胞膜表面に局在し、タンパク質立体構造が明らかになっており、対応する医薬品が開発されているヒトのタンパク質の一覧を取得する｣ことが一つのアプリケーションで実現できます。
- また、これらの操作で取得した一覧をさらに特徴づけするために、他の属性での分布や分類を調べる機能があり、ヒト遺伝子が保存されている最も遠縁の生物別に分類したり、組織特異的に高発現する遺伝子を組織別に分類する、UniProtの各エントリーに付与されているタンパク質と関連する疾患別に分類することなどが容易に行えます。


## スクリーンショット

### TogoDX/Human トップ画面（一部省略）
![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDXhuman_top.png)

### Attributeの詳細
![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDX_attribute_20211004.png)

### 絞り込みの結果得られた表とその分布
![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDX_results_20211004.png)

### 絞り込みの結果得られた表から閲覧できるIDに関連する情報
![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_TogoDX_resultsstanza_20211004.png)
