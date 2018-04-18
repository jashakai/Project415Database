var restful = require('node-restful');
var mongoose = restful.mongoose; 

var EMRSchema = new mongoose.Schema({
	ssn: Number,
	Fname: String,
	Lname: String,
	Healthy: Boolean

});

module.exports = restful.model ('emrs', EMRSchema);