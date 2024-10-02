# TogoImputation
 

### TogoImputationとは

SNPアレイデータのインピュテーション解析を実施することができるサービスです。<br />
国立遺伝学研究所 生命情報・DDBJセンターと協力して運営しています。


### システムの概要

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/Togoimputation_fig1_ja.png)


### 入力と出力

インピュテーションワークフローの入力は、以下2つのデータセットです。<br />

* Target genotype dataset: <br />
　SNPアレイによるジェノタイプデータです。ご自身でサーバにアップロードいただくことを想定しています。ファイル形式はVCFをサポートしています。（PLINK形式は現在サポートしていません）

* Reference panel dataset: <br />
　フェージングされたハプロタイプを含むデータセットです。すぐに利用可能なリファレンスパネルが8種類用意されています。

インピュテーション後のデータをダウンロードすることが可能です。


### 使用するリファレンスパネルについて<br />
インピュテーションを実施いただく際に使用可能なリファレンスパネルの内、非制限公開データのリファレンスパネル利用には、データ利用申請の必要はありません。制限公開データのリファレンスパネルを利用いただくためには、「[NBDCヒトデータベース](https://humandbs.dbcls.jp/)」へのデータ利用申請が必要です。

### 利用可能なインピュテーションアルゴリズム<br />
以下のプログラムを用いてインピュテーション解析を行います。
* [conform-gt (version 24May16)](https://faculty.washington.edu/browning/conform-gt.html)を用いて、入力されたSNP アレイデータの reference / alternative allele がリファレンスパネルデータと一致するように変換します
* [Beagle 5.2 (version 21Apr21.304)](https://faculty.washington.edu/browning/beagle/b5_2.html)を用いてフェージングおよびインピュテーション解析を実施します<br />
* [bcftools (version 1.9)](http://samtools.github.io/bcftools/bcftools.html)を用いてインピュテーション後のゲノムデータ(VCF file)のインデックスを作成します<br />
* 一連のワークフローは[Common Workflow Language (CWL)](https://www.commonwl.org/)で実装され、[imputation-server workflow](https://github.com/ddbj/imputation-server-wf)として公開されています。


### 関連するサービス

## NBDCヒトデータベース

一部のリファレンスパネルの利用には「NBDCヒトデータベース」への利用申請が必要です。インピュテーション用の参照パネルデータの加工については[こちら](https://humandbs.dbcls.jp/imputation-reference)


## 参考文献

* The NBDC-DDBJ imputation server facilitates the use of controlled access reference panel datasets in Japan Hum Genome Var. 2022 Dec 20;9(1):48. doi:0.1038/s41439-022-00225-6. 

<!--:-->
