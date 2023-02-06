// Include the Google Sheets API
var sheets = require('googleapis').sheets('v4');

// Replace YOUR_API_KEY with the API key for your Google Sheet
var API_KEY = 'AIzaSyDBtQq8QskcrkwXpibpE9p-NdUOBMow_EQ';

// Replace YOUR_SHEET_ID with the ID of your Google Sheet
var sheetId = '1JZANWXsUIWLKbOMlC4PX0ASEct6N8Xp71rqC3mZemxY';

// Function to log user inputs to the Google Sheet
function logData(name, impressions) {
  sheets.spreadsheets.values.append({
    auth: API_KEY,
    spreadsheetId: sheetId,
    range: 'Sheet1!A2', // the starting cell for appending data
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [[name, impression]]
    }
  }, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Data logged successfully');
    }
  });
}

// Example of how to use the logData function
logData('John', 'Tiger');
