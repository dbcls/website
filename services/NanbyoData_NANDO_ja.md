# NanbyoData
難病情報の国際的な統合・共有を促進する難病情報ポータルサイト「NanbyoData」
「難病」は日本独自の疾患分類であるため、国際的な情報統合および共有が困難でした。そこで私たちは、国内で初めて難病の疾患分類を難病名語彙集NANDO（Nanbyo Disease Ontology）として体系化し、NANDOを活用し国内外の難病関連情報を統合した難病情報ポータルサイト[NanbyoData](https://nanbyodata.jp)を構築しました。 


## NanbyoDataについて
我々は、DBCLSで開発されたMetaStanzaと、DBCLSがRDF（Resource Description Framework）技術を用いて整理を進める統合データベースを用いて、国内外の難病関連情報を統合しています。NanbyoDataは、これまで入手することができなかった難病に関する国外の遺伝情報や表現型情報など、国内外の様々なデータベースから自動的に集約された情報を閲覧することが可能です（図１）。以下、NanbyoDataが提供する主な情報です。
 1. 疾患概要（国内・国外の情報）
 2. 疾患原因遺伝子（国外の情報）
 3. 診療用遺伝学的検査情報（国内の情報）
 4. 臨床的特徴（国外の情報）
 5. 難病特異的バイオリソース　マウス／細胞／遺伝子（国内の情報）
 6. バリアント情報（国内・国外の情報）

### 図１．NanbyoDataの難病情報画面

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/Nanbyo_Fig1_20240828.png)

## NANDOについて
NanbyoDataが難病関連情報を収集するために活用しているNANDOは、国内における2つの難病制度である指定難病制度および小児慢性特定疾病制度の対象となる難病名を、体系的かつ網羅的に整理した語彙集です（図２）。
- 指定難病（2024年6月時点で338疾患）を対象とし、それら疾患の全てのサブタイプ疾患を含みます。
- 小児慢性特定疾病（2024年6月時点で814疾患）を対象とし、それら疾患の全てのサブタイプ疾患を含みます。
- 国際的に多くのデータベースやシステムで採用されている疾患名語彙集Mondo（Mondo Disease Ontology）と紐づけられており、OMIMやOrphanetといった国外の主要疾患データベースとの連携を可能にしました。NANDO内にMondoへのリンクを含むだけでなく、国際協力によりMondo内にNANDOへのリンクが含まれています。これにより、両オントロジーを通じて国際的な情報統合および共有が促進されます。

### 図２．NANDOの階層構造と用語の定義（NCBO BioPortalより）

![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/Nanbyo_Fig2_20240828.png)



## 利用例
### その１
[Rare Disease Day](https://rddjapan.info/2022)（2022年2月29日）において、NANDOに含まれる全難病名をパネル展示し、参加者に難病の種類の多さを体感していただきました（図３）。

#### 図３．Rare Disease Dayにおける全難病名パネル展示風景（RDD2022より）

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/Nanbyo_Fig3_20240828.png)


### その２
国際的に数多くのデータベースおよびシステムで活用されている疾患名語彙集MondoがNANDOへのリンクを採用しました（releases/2024-07-02 から）。Mondoを活用している国外の臨床医や研究者が、日本の難病情報にアクセス出来るようになりました（図４）。


#### 図４．MondoのHuntington disease情報に含まれるNANDOへのリンク（EMBL-EBI Ontology Lookup Serviceより）

![Fig-4](https://raw.githubusercontent.com/dbcls/website/master/services/images/Nanbyo_Fig4_20240828.png)

## 今後のNanbyoData/NANDOについて
NANDOは今後、国外の主要な語彙集との連携を深め、難病情報の統合・共有に欠かすことのできない語彙集を目指します。またNanbyoDataは、国内外の主要な難病関連リソースを統合し、難病の診療・研究推進に欠かすことのできないサイトを目指します。


## 参考文献

* オントロジーを用いた希少・遺伝性疾患診断支援，藤原 豊史・仁宮 洸太，人工知能，2020年35巻4号 p.480-486， https://doi.org/10.11517/jjsai.35.4_480
* 研究から医療までの網羅的な希少疾患関連知識の集約/共有プラットフォーム，仁宮 洸太・藤原 豊史 他，細胞，2021年11月号

<!--:-->
