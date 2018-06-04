# GGGenome

GGGenome is an ultrafast search engine for DNA sequences.  
GGGenome web server: https://GGGenome.dbcls.jp/en/

![Fig-1](https://raw.githubusercontent.com/dbcls/master/services/images/DBCLSServices_GGGenome.png)

### REST API

```
URI: http[s]://GGGenome.dbcls.jp/db/k/strand/sequence[.format][.download]
```

* `db` : Sequence database.  
  (e.g. human genome `hg38`, mouse genome `mm10`, RefSeq transcripts `refseq`, ...)
* `k` : Maximum number of mismatches/gaps. (default: 0)
* `strand` : `+` (`plus`) or `-` (`minus`) to search specified strand only. (optional)
* `sequence` : Nucleotide sequence, case insensitive.
* `format` : `html`,`txt`,`csv`,`bed`,`gff`,`json`. (default: `html`)
* `download` : Download result as a file. (optional)

**Example 1:** https://GGGenome.dbcls.jp/hg38/1/TTCATTGACAACATT

* Search `TTCATTGACAACATT` in
* human genome `hg38`,
* allowing `1` mismatches/gaps,
* output in `html` format (default).

**Example 2:** https://GGGenome.dbcls.jp/refseq/+/TTCATTGACAACATT.txt

* Search `TTCATTGACAACATT` in
* NCBI `refseq` complete RNA,
* with perfect matches (default),
* search for `+` strand only,
* output in tab-delimited `txt` format.

### Reference

* TogoTV – GGGenome: a fast and simple DNA sequence search engine. DOI: [10.7875/togotv.2015.036](https://doi.org/10.7875/togotv.2015.036)
