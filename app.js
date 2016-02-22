/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// testing - hello world
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// testing - jade engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// testing - jade
app.get('/', function (req, res) {
  res.render('index', {title: 'Hey', message: 'Hello there! This is HTML being written out by a Jade template. Styles are written in Sass and processed via Gulp! Hi Matt.'});
})

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
