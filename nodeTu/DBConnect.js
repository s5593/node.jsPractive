// // Connection URL
const url = 'mongodb://127.0.0.1:27017/testDB';
// // Database Name
// const client = new MongoClient(url, {useNewUrlParser: true},
//   { useUnifiedTopology: true });

// console.log('connect_DB4.....');
// app.post('/', function(request, response){
//   console.log('connect_DB2.....');

//   conn_mongo(response);
// });

// function conn_mongo(response){
//   console.log('connect_DB3.....');

//   async.waterfall([
//     function(callback){
//       client.connect(function(err, db) {
//         assert.equal(null, err);
//         console.log("Connected successfully to server");

//         // const db = client.db(dbName);
//          db.close();
//         callback(null, 'conn_mongo');
//       });
//     }
//   ],
//   function(callback, message){
//     response.send(message);
//     console.log('================');
//   });
// }

// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     });
//   }

  // const findDocuments = function(db, callback) {
  //   // Get the documents collection
  //   const collection = db.collection('documents');
  //   // Find some documents
  //   collection.find({}).toArray(function(err, docs) {
  //     assert.equal(err, null);
  //     console.log("Found the following records");
  //     console.log(docs)
  //     callback(docs);
  //   });
  // }

// const updateDocument = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents');
//   // Update document where a is 2, set b equal to 1
//   collection.updateOne({ a : 2 }
//     , { $set: { b : 1 } }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Updated the document with the field a equal to 2");
//     callback(result);
//   });  
// }

// const removeDocument = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents');
//   // Delete document where a is 3
//   collection.deleteOne({ a : 3 }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Removed the document with the field a equal to 3");
//     callback(result);
//   });    
// }

// const indexCollection = function(db, callback) {
//   db.collection('documents').createIndex(
//     { "a": 1 },
//       null,
//       function(err, results) {
//         console.log(results);
//         callback();
//     }
//   );
// };
// Use connect method to connect to the server
