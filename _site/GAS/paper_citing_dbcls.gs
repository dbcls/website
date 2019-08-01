function DownloadJson() {
  /* セル書き換え
  var ss_active_all = SpreadsheetApp.getActiveSpreadsheet();
  var sheet_copyTo = ss_active_all.getSheetByName('master');
  var status = sheet_copyTo.getRange("I4")
  status.setValue('更新済')
  */
  
  var url = "https://spreadsheets.google.com/feeds/cells/1JGvXRqvu5A5IhaYfz40yTblNP7bZZL6GaPGaZl7knHM/od6/public/values?alt=json";
  var script = "<script>window.open('" + url + "', '_blank').focus()</script>";
  var html = HtmlService.createHtmlOutput(script);
  SpreadsheetApp.getUi().showModalDialog(html, 'Open ' + url);
}