const mongoose = require('mongoose');

const contacSchema = new mongoose.Schema({
	name: 			String,
	groupObjectId: String,
	maintenance: 	Number,
	email: 			String,
	phone: 			String,
	notes: 			String,
	lastContacted: Date
});

module.exports = mongoose.model('Contact', contacSchema);