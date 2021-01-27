var express = require('express');
var router = express.Router();
 
/* POST */
router.post('/', function(req, res, next) {
    var mykey = req.body.mykey;
    console.log("## post request"); 
    res.render('result_page', { title: 'Express', mykey:mykey , method: "post" });
});
 
module.exports = router;


