var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var allowInsecureHTTP = true

var app = express();

// Specify the connection string for your mongodb database
// and the location to your Parse cloud code
var api = new ParseServer({
  databaseURI: process.env.MONGO_URL,
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  fileKey: process.env.FILE_KEY,
  serverURL: process.env.SERVER_URL,
  dotNetKey: process.env.DOTNET_KEY
});

// Configuration for parse dashboard
var dashboard = new ParseDashboard({
  users: [
    {
      user: process.env.USER_NAME,
      pass: process.env.PASSWORD
    }
  ],
  apps: [
    {
      serverURL: process.env.SERVER_URL,
      appId: process.env.APP_ID,
      masterKey: process.env.MASTER_KEY,
      appName: "My Parse Server App"
    }
  ]
}, allowInsecureHTTP);

// make the Parse Server available at /parse
app.use('/parse', api);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

// Hello world
app.get('/', function(req, res) {
  res.status(200).send('Express is running here. Check /parse directory for magic :)');
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log('parse-server running on port ' + port + '. APP_ID ' + process.env.APP_ID);
});

