var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var port = process.env.PORT || 3100;

var Images = require('./models/image');
var router = require('./routes/index')(app, Images)

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb+srv://kck:1234@cluster0.qnvs4.mongodb.net/sample_geospatial');

app.listen(port, function(){
    console.log("Express server has started on port " + port)
   });