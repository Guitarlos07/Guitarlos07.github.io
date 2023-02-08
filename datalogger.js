// Include the Google Sheets API
// var sheets = require('googleapis').sheets('v4');

// Replace YOUR_API_KEY with the API key for your Google Sheet
var API_KEY = 'AIzaSyDBtQq8QskcrkwXpibpE9p-NdUOBMow_EQ';

// Replace YOUR_SHEET_ID with the ID of your Google Sheet
var sheetId = '1JZANWXsUIWLKbOMlC4PX0ASEct6N8Xp71rqC3mZemxY';

// Function to log user inputs to the Google Sheet
//function logData(name, impression) {
//  sheets.spreadsheets.values.append({
 //   auth: API_KEY,
 //   spreadsheetId: sheetId,
 //   range: 'Sheet1!A2', // the starting cell for appending data
 //   valueInputOption: 'RAW',
 //   insertDataOption: 'INSERT_ROWS',
 //   resource: {
 //     values: [[document.getElementById("name").innerHTML, document.getElementById("impression").innerHTML]]
//    }
 // }, function(err, response) {
 //   if (err) {
 //     console.log(err);
 //   } else {
  //    console.log('Data logged successfully');
 //   }
//  });
//}

//this was the original code, but it failed because of its reliance on the require method new program as follows:

//This code initiates the gapi method
gapi.load('client:auth2', function() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: "782847601029-okoddn04a3dubmfqopvm4g561ft0co0u.apps.googleusercontent.com",
    discoveryDocs: "https://developers.google.com/discovery/v1/reference/apis",
    scope: "https://www.googleapis.com/auth/drive"
  }).then(function() {
    // Your code that uses the gapi library goes here
    // Function to log user inputs to the Google Sheet
  function logData(name, favoriteAnimal) {
    gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: 0,
    range: 'Sheet1!A2',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [[document.getElementById("name").innerHTML, document.getElementById("impression").innerHTML]]
    }
  }).then(function(response) {
    console.log('Data logged successfully');
  }
  )};

  });
});

