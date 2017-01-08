const Group 		= require('../models/groupModel');
const bodyParser 	= require('body-parser');

module.exports = function(app) {

	app.use(bodyParser.json());

	app.post('/api/group', function(req, res) {
		if (req.body.groupObjectId) // given a groupObjectId, so edit the existing group
			Group.findByIdAndUpdate(req.body.groupObjectId, {
				name: req.body.name
			}, function(err) {
				if (err) throw err;
				else 		res.send('successfully updated');
			});
		else
			Group({
				name: req.body.name
			}).save(function(err) {
				if (err) throw err;
				else 		res.send('successfully created');
			});
	});

	app.get('/api/group', function(req, res) {
		Group.find({}, function(err, groups) {
			if (err) throw err;
			else 		res.send(groups);
		});
	});

	app.delete('/api/group', function(req, res) {
		Group.findByIdAndRemove(req.body.groupObjectId, function(err) {
			if (err) throw err;
			else 		res.send('successfully removed');
		});
	});

}