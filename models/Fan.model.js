var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var fanSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone:Number,
	monthlySupport:Number,
	aboutMe:String
});

module.exports = mongoose.model('Fan', fanSchema);