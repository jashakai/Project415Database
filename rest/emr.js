var express = require ('express');
var router = express.Router();

var emr = require ('./models/EMREntry');

emr.methods(['get','put','post','delete']);
emr.register(router, '/rest/emr')








//router.get('/rest/emr',function (req, res) {
//	res.send('api working')
//})



module.exports = router;