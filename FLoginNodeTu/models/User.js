const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kck:1234@cluster0.qnvs4.mongodb.net/sample_geospatial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var userSchema = mongoose.Schema({
    uid: String,
    email: String,
    name: String,
    pic: String
});

module.exports = mongoose.model('User', userSchema);