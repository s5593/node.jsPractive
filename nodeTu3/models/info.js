var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var infoSchema = new Schema({
    name: String,
    id: String,
    path: String
});

module.exports = mongoose.model('infos', infoSchema);