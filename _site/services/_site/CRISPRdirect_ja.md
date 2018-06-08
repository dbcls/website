# CRISPRdirect

### CRISPRdirectとは

入力した塩基配列に対してCRISPR-Cas9システムのガイドRNAを設計することができるツールです。  
CRISPRdirect： https://crispr.dbcls.jp/

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSServices_CRISPRdirect.png)

### CRISPRdirectの特徴

* 目的以外の部位で誤ってゲノム編集が起こる「オフターゲット効果」の少ないガイドRNAを効率よく設計できます。
* 主要なモデル生物に加え、ゲノム配列が公表されている350以上の生物種に対応しています。

### 使い方

* 任意の塩基配列、アクセッション番号、またはゲノムの座標を入力して [design] ボタンをクリック。
* 標的部位の候補が表示されます。緑色にハイライト表示されたものが、特異性の高いガイドRNAを設計できる部位です。
* 表のなかの [detail] をクリックすると、オフターゲット候補部位が表示されます。ガイドRNAとゲノムとのあいだにミスマッチや挿入・欠失がある場合についても表示することが可能です。

### 今後の開発予定

* データを定期的に更新し、ユーザからのフィードバックに応じて機能を改善していく予定です。

### 関連プロジェクト

* 高速配列検索GGGenome (https://GGGenome.dbcls.jp/)  
  ゲノム等の塩基配列を高速に検索できるウェブサーバ

* 統合遺伝子検索GGRNA (https://GGRNA.dbcls.jp/)  
  遺伝子をGoogleのように検索できるウェブサーバ

* siDirect (http://siDirect.RNAi.jp/)  
  哺乳類細胞で活性が高く標的遺伝子に特異的なsiRNAの設計ウェブサーバ

### 参考文献

* Naito Y, Hino K, Bono H, Ui-Tei K. CRISPRdirect: software for designing CRISPR/Cas guide RNA with reduced off-target sites. Bioinformatics 31, 1120-1123 (2015) DOI: [10.1093/bioinformatics/btu743](https://doi.org/10.1093/bioinformatics/btu743)
* 統合TV「CRISPRdirectを使ってCRISPR/Cas法のガイドRNA配列を設計する」 DOI: [10.7875/togotv.2014.025](https://doi.org/10.7875/togotv.2014.025)
