    function doPost(e) {
  var sheet = SpreadsheetApp.openById('/// YOUR GOOGLE SHEET ID HERE /////').getSheetByName('// YOUR SHEET NAME ///'); 
  var data = sheet.getRange('YOUR COLUMN FOR FETCH DATA').getValues(); 
  var news = [];
  
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] !== '') {
      news.push(data[i][0]);
    }
  }
  
  // Return the news data as JSON
  return ContentService.createTextOutput(JSON.stringify(news))
    .setMimeType(ContentService.MimeType.JSON);
}

