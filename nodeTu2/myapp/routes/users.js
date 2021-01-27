const mongoose = require('mongoose');
var Int32 = require('mongoose-int32');

const Mykey = new mongoose.Schema({
    
    mykey: Int32
});

module.exports = mongoose.model('conntest', Mykey);