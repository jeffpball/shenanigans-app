var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;
// Set sandbox url
defaultClient.basePath = 'https://connect.squareupsandbox.com';
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
// Set sandbox access token
oauth2.accessToken = "EAAAEFSIgUrzxc6uMm5mq5zlz5gDYFdRO63ZLiTEwGG4GbWDmHuwktTZkIURX0p0";
// Pass client to API
var api = new SquareConnect.LocationsApi();