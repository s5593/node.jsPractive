var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
    console.log('LOGGED1');
    next();
  };

var requestTime = function (req, res, next) {
    console.log('LOGGED2');
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);
app.use(myLogger);

app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

app.listen(3000);