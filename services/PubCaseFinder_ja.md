# PubCaseFinder
### PubCaseFinderとは

PubCaseFinderは、希少・遺伝性疾患の診療・研究に役立つ、以下の3つのWebサービスの総称です（図1）。

* DiseaseSearch　（[https://pubcasefinder.dbcls.jp](https://pubcasefinder.dbcls.jp)）
* CaseSharing　([https://pubcasefinder.dbcls.jp/cases](https://pubcasefinder.dbcls.jp/cases))
* PanelSearch ([https://pubcasefinder.dbcls.jp/panelsearch](https://pubcasefinder.dbcls.jp/panelsearch))

![Fig-1](https://raw.githubusercontent.com/dbcls/website/master/services/images/PubCaseFinder_fig-3_20230728.png) 
図1.　PubCaseFinderが提供する3つのWebサービス

### DiseaseSearchについて

DiseaseSearchでは、患者の兆候・症状と関連性の高い希少・遺伝性疾患や遺伝子を、効率良く検索することができます（図2）。他にも、DiseaseSearchには以下のような特長があります。

* 患者の兆候・症状と関連性の高い希少・遺伝性疾患や遺伝子を検索するために、精度の高い類似度検索アルゴリズムを開発し実装しています。詳しくは以下の論文を参照してください。
  * Fujiwara, Toyofumi, Jae‐Moon Shin, and Atsuko Yamaguchi. "Advances in the development of PubCaseFinder, including the new application programming interface and matching algorithm." Human Mutation 43.6 (2022): 734-742. DOI: [https://doi.org/10.1002/humu.24341](https://doi.org/10.1002/humu.24341)
* PubMed収載の英語症例報告、およびJ-STAGE収載の日本語症例報告を疾患ごとに検索できます。
* 兆候・症状の入力を補助するために、英語・日本語診療録から兆候・症状を自動抽出する機能や、ヒト3Dモデルを利用した兆候・症状入力機能など、多数の機能を提供しています。
* 国内外での利用を想定し、日本語だけでなく、英語、韓国語にも対応しています。


![Fig-2](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_PubCaseFinder_jp_fig-2_20230927.png)
図2.　5つの兆候・症状で遺伝性疾患を検索した結果

### CaseSharingについて
CaseSharingは、希少・遺伝性疾患の症例情報の管理支援を目的としたWebサービスです（図3）。症例情報は、診断・治療・創薬などの研究に欠かせないリソースですが、症例数が少ないがゆえに症例報告の記述方法やフォーマットもばらつきがちで、このことが研究の妨げとなることがあります。本Webサービスを用いることで、施設、報告者、時代によるばらつきを抑制して共通フォーマットで記録でき、研究の効率化を助けることにつながります。なお、データはユーザー自身の端末にのみ保存されます。他にも、CaseSharingには以下のような特長があります。
* ユーザ登録なしで利用することができます。
* 症例情報はクラウドに保存されるのではなく、ユーザ自身の端末に保存されます。
* 国際的な症例情報共有形式であるPhenopacketsやOMOPに対応する予定です。
* 英語、日本語、韓国語、中国語（簡体字、繁体字）に対応しており、世界各地のユーザとの情報共有もスムーズになります。

![Fig-3](https://raw.githubusercontent.com/dbcls/website/master/services/images/PubCaseFinder_fig-2_20230728.png)
図3.　CaseSharing全体像


### PanelSearchについて

PanelSearchでは、ヒトの9,998の希少・遺伝性疾患に関連する遺伝子パネルデータを検索できます（図4）。遺伝子パネルデータに含まれる疾患原因遺伝子の一覧を閲覧したり、逆に遺伝子から関連遺伝子パネルデータを探すことができます。他にも、PanelSearchには以下のような特長があります。
* ゲノム配列の効率的な臨床的解釈に役立てることができます。詳細については以下の文献をご参照ください。
  * Shin, J. M., Fujiwara, T., & Yamaguchi, A. (2023). Ontology‐based expansion of virtual gene panels to improve diagnostic efficiency for rare genetic diseases. [https://ceur-ws.org/Vol-3415/paper-10.pdf](https://ceur-ws.org/Vol-3415/paper-10.pdf)
* 個々の遺伝子パネルデータをダウンロードできます。また、9,998件の全遺伝子パネルデータもダウンロードできます。
* PanelSearchは、希少・遺伝性疾患名の語彙集であるMonarch Disease Ontology（Mondo）をベースに、それぞれの疾患に対する疾患原因遺伝子を、国際的に主要な公共データベースであるMedGen、Opharnet、GenCCから自動取得しています。Mondoの疾患階層情報を利用することで、例えば「Mendelian disease」などの疾患グループの遺伝子パネルデータも自動で構築しています。
* 今後、難病の遺伝子パネルデータを構築し公開する予定です。

![Fig-4](https://raw.githubusercontent.com/dbcls/website/master/services/images/PubCaseFinder_fig-1_20230728.png)
図4.　疾患名で遺伝子パネルを検索した結果

### 今後のPubCaseFinderについて
PubCaseFinderは今後、希少・遺伝性疾患に関わる情報をあらゆる観点から一元的に集積し、希少・遺伝性疾患の診療・研究推進に欠かすことのできないWebサービスの提供を目指します（図5）。

![Fig-5](https://raw.githubusercontent.com/dbcls/website/master/services/images/DBCLSservices_PubCaseFinder_jp_fig-5_20230927.png)
図5.　PubCaseFinderの将来像


<!--:-->
