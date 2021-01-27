var mongoose = require('mongoose');
const assert = require('assert');
const express = require('express');
const async = require('async');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const url = 'mongodb://127.0.0.1:27017/conntest';


function connect_mongodb(response)
{
    async.waterfall([
        //파일이 현재 저장소에 저장되어있는지 검사//
        function(callback) //첫 시작은 하나의 callback으로 시작한다.//
        {
            mongoose.connect(url,{ useNewUrlParser: true, useFindAndModify: false });
            var db = mongoose.connection;
            db.on('error', console.error);
            db.once('open', function(){
                // 몽고디비 서버에 연결
                console.log("Connected to mongod server");
            });
            callback(null, 'connect mongodb');
        }
    ],
    //Final Task : send
    function(callback, message)
    {
        response.send(message);

        console.log('-------------connectTest End---------');
    });
}

function insert_mongodb(mykey, response)
{
    async.waterfall([
        //파일이 현재 저장소에 저장되어있는지 검사//
        function(callback) //첫 시작은 하나의 callback으로 시작한다.//
        {
            mongoose.connect(url,{ useNewUrlParser: true, useFindAndModify: false });
            var db = mongoose.connection;
            db.on('error', console.error);
            db.once('open', function(){
                // 몽고디비 서버에 연결
                console.log("Connected to mongod server");
            });
            callback(null, db, mykey);
        },
        //Task 2 : insert//
        function(db, mykey, callback)
        {
            db.collection('conntest')
            .insertOne( {
                "mykey" : mykey
            }, function(err, result) {
                assert.equal(err, null);
                
                console.log("Inserted a document into the restaurants collection.");

                db.close(); //개방했으니 사용 후 닫아준다.//
                
                callback(null, 'insert succcess mongodb'); //콜백호출//
            });
        }
    ],
    //Final Task : send
    function(callback, message)
    {
        response.send(message);

        console.log('-----------insert End----------');
    });
}

exports.connect_mongodb = connect_mongodb;
exports.insert_mongodb = insert_mongodb;