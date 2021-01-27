const express = require('express');
const CM = require('./ConnMongo.js');
const router = express.Router();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
let mykey = {
"mykey" : 1
}
app.get('/', function(request, response){
    console.log('connect mongodb...');
    console.log(request.body);

    //몽고디비 연결//
    CM.connect_mongodb(response);
  });
  
  //입력
  app.get('/insert', function(request, response){
    // mykey = request.body.mykey;

  
    console.log('mykey' + mykey);
  
    //몽고디비에 저장//
    CM.insert_mongodb(mykey, response);
  
    //response.send('success...');
  });
  
  app.listen(3000, function(){
    console.log('Connected 3000 port')
    console.log('--------------------------');
  });

