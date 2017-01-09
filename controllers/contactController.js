const Contact 		= require('../models/contactModel');
const bodyParser 	= require('body-parser');

module.exports = function(app) {

	app.use(bodyParser.json());

	app.get('/api/contact/:contactId?', function(req, res) {
		if (req.params.contactId) // get a specific contact if desired
			Contact.findById(req.params.contactId, function(err, contact) {
				if (err) throw err;
				else 		res.send(contact);
			});
		else // get all contacts otherwise
			Contact.find({}, function(err, contacts) {
				if (err) throw err;
				else 		res.send(contacts || []);
			});
	});

	app.post('/api/contact', function(req, res) {
		if (req.body.contactObjectId) { // if there's an id given in the body, update that contact
			const contactData = {};
			if (req.body.name) 				contactData.name = req.body.name;
			if (req.body.groupObjectId) 	contactData.groupObjectId = req.body.groupObjectId;
			if (req.body.maintenance) 		contactData.maintenance = req.body.maintenance;
			if (req.body.email) 				contactData.email = req.body.email;
			if (req.body.phone) 				contactData.phone = req.body.phone;
			if (req.body.notes) 				contactData.notes = req.body.notes;
			if (req.body.lastContacted) 	contactData.lastContacted = req.body.lastContacted;
			
			Contact.findByIdAndUpdate(req.body.contactObjectId, contactData, function(err) {
				if (err) throw err;
				else 		res.send('successfully updated');
			});
		} else // if there's no id, create a new contact
			Contact({
				name: 			req.body.name,
				groupObjectId: req.body.groupObjectId,
				maintenance: 	req.body.maintenance,
				email: 			req.body.email,
				phone: 			req.body.phone,
				notes: 			req.body.notes,
				lastContacted: req.body.lastContacted
			}).save(function(err) {
				if (err) throw err;
				else 		res.send('successfully created');
			});
	});

	app.delete('/api/contact', function(req, res) {
		Contact.findByIdAndRemove(req.body.contactObjectId, function(err) {
			if (err) throw err;
			else 		res.send('successfully deleted');
		})
	});

	app.get('/api/search/contact/:keyword?', function(req, res) {
		const keyword = req.params.keyword || '';
		const re = new RegExp(`${keyword}`, 'i');
		Contact.find({ name: re }, function(err, contacts) {
			if (err) throw err;
			else 		res.send(contacts);
		});
	})

}
















