var properties = PropertiesService.getScriptProperties();

function aggregateData () {
	var sheet = SpreadsheetApp.getActiveSpreadsheet()
  var sheets = sheet.getSheets();
  var service_name_array = []
  for(var i = 0; i < sheets.length; i++) {
    if(sheets[i].getName().slice(0,5) === 'EPMC_') {
      //EPMC_から始まるシートからPMIDを取得→for_websiteシートにコピー
      var target_sheet = sheets[i]
      var service_name = target_sheet.getName().slice(5)
      service_name_array.push(service_name)
      var pmid_array_per_service = []
      var pmid = target_sheet.getRange(2,2,target_sheet.getLastRow() - 1).getValues()
      for(var j in pmid) {
        pmid_array_per_service.push([pmid[j][0]])
      }
      properties.setProperty(service_name, JSON.stringify(pmid_array_per_service))
    }
  }
  properties.setProperty('service_name_array', JSON.stringify(service_name_array))
  var for_website_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('for_website')
  var lastRow = for_website_sheet.getLastRow()
  var lastCol = for_website_sheet.getLastColumn()
  for_website_sheet.getRange(2, 1, lastRow-1, lastCol-1).clearContent()
  for_website_sheet.getRange("I2").setValue(0)
  trigger()
}

function renewData () {
  var service_name_array = properties.getProperty('service_name_array');
  service_name_array = JSON.parse(service_name_array)
  var paper_array = []
  var citation = ''
  service_name_array.forEach(function(service_name){
    var pmid_array_per_service = properties.getProperty(service_name)
    pmid_array_per_service = JSON.parse(pmid_array_per_service)
    pmid_array_per_service.forEach(function(article) {
      article.unshift(citation)
      article.unshift(service_name)
    })
    paper_array.push(pmid_array_per_service)
  })
  for(var i = 1; i < paper_array.length; i++){
    paper_array[0] = paper_array[0].concat(paper_array[i]);
  }
  paper_array = paper_array[0]
  var for_website_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('for_website')
  var order = for_website_sheet.getRange("I2").getValue()
  if(parseInt(order, 10) === paper_array.length) {
    deleteTriggerAll()
    //処理全て完了したらmasterにコピー
    copyValues()
  } else {
    try {
      var cell_order = parseInt(order, 10) + 2
      var options = {
        'method' : 'get',
        'contentType': 'application/xml'
      }
      Logger.log(order)
      var id = paper_array[order][2]
      var response = UrlFetchApp.fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id=' + id, options)
      var xml = XmlService.parse(response.getContentText());
      var rootDoc = xml.getRootElement();
      var doi = ''
      var title =  ''
      var first_author = ''
      var journal = ''
      var e_pub_date_year = ''
      var e_pub_date_month = ''
      var e_pub_date_day = ''
      var e_pub_date = ''
      if (rootDoc.getChild('PubmedArticle') !== null) {
        var target_root = rootDoc.getChild('PubmedArticle').getChild('MedlineCitation').getChild('Article')        
        if (target_root.getChild('ELocationID') !== null) {
          doi = 'http://doi.org/' + target_root.getChild('ELocationID').getText()
        }
        if(target_root.getChild('ArticleTitle') !== null) {
          title = target_root.getChild('ArticleTitle').getText()
        }
        if(target_root.getChild('AuthorList') !== null) {
          first_author = target_root.getChild('AuthorList').getChild('Author').getChild('LastName').getText()
        }
        if(target_root.getChild('Journal') !== null) {
          journal = target_root.getChild('Journal').getChild('ISOAbbreviation').getText()
        }
        if(target_root.getChild('Journal').getChild('JournalIssue').getChild('PubDate').getChild('Year') !== null) {
          e_pub_date_year = target_root.getChild('Journal').getChild('JournalIssue').getChild('PubDate').getChild('Year').getText()
        }
        if(target_root.getChild('Journal').getChild('JournalIssue').getChild('PubDate').getChild('Month') !== null) {
          e_pub_date_month = '/' + target_root.getChild('Journal').getChild('JournalIssue').getChild('PubDate').getChild('Month').getText()
        }
        if(target_root.getChild('Journal').getChild('JournalIssue').getChild('PubDate').getChild('Day') !== null ) {
          e_pub_date_day = '/' + target_root.getChild('Journal').getChild('JournalIssue').getChild('PubDate').getChild('Day').getText()
        }
      }
      e_pub_date = e_pub_date_year + e_pub_date_month + e_pub_date_day
      paper_array[order].push(doi)
      paper_array[order].push(title)
      paper_array[order].push(first_author)
      paper_array[order].push(journal)
      paper_array[order].push(e_pub_date)
      for_website_sheet.getRange(cell_order, 1, 1, 8).setValues([paper_array[order]])
      for_website_sheet.getRange("I2").setValue(order + 1)
    } catch (ex) {
      Logger.log("Message: " + ex.message + "\r\nFile: " + ex.fileName + "\r\nLine: " + ex.lineNumber + "\r\n");
    }
  }
}

function copyValues() {
  var ss_active_all = SpreadsheetApp.getActiveSpreadsheet();
  var sheet_copyFrom = ss_active_all.getSheetByName('for_website');
  var sheet_copyTo = ss_active_all.getSheetByName('master');
  var range = sheet_copyFrom.getDataRange()
  var value = range.getValues()
  var rows = value.length;
  var cols = value[0].length;

  /* 更新されているかチェック */
  var total_num = sheet_copyTo.getRange("I2").getValue()
  var status = sheet_copyTo.getRange("I4")
  Logger.log(rows - 1)
    Logger.log(total_num)
  if(rows - 1 == total_num) {
    Logger.log('更新済')
    status.setValue('更新済')
  } else if (rows - 1 > total_num) {
    Logger.log('要更新')
    sheet_copyTo.getRange(1,1,rows,cols).setValues(value);
    status.setValue('要更新')
  }
}

function trigger() {
  ScriptApp.newTrigger('renewData').timeBased().everyMinutes(1).create();
}

function deleteTriggerAll() {
  var allTriggers = ScriptApp.getScriptTriggers();
  for(var i=0; i < allTriggers.length; i++) {
      ScriptApp.deleteTrigger(allTriggers[i]);
  }
}
