var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var post_page = require('./routes/post_page');
var result_page = require('./routes/result_page');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/post_page', post_page);
app.use('/result_page', result_page);

app.use('/', indexRouter);
app.use('/users', usersRouter);

url = 'mongodb://127.0.0.1:27017/conntest'
mongoose.connect(url,{ useNewUrlParser: true, useFindAndModify: false });
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // 몽고디비 서버에 연결
    console.log("Connected to mongod server");
});

app.post('/', function(request, response){
  console.log('connect mongodb...');
  console.log(request.body);

  //몽고디비 연결//
  CM.connect_mongodb(response);
});

//입력
app.post('/insert', function(request, response){
  // mykey = request.body.mykey;


  console.log('mykey' + mykey);

  //몽고디비에 저장//
  CM.insert_mongodb(mykey, response);

  //response.send('success...');
});







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
