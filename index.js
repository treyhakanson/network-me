// internal/npm imports
const express 	= require('express');
const mongoose = require('mongoose');
const path 		= require('path');

// import super insecure and not best practices auth
// for the mongo connection 
const auth = require('./auth.json');

// basic setup
const app = express();	// create the express app
app.use('/assets', express.static(path.join(__dirname, 'public'))); // use the 'public' directory as a static directory at the path '/assets'
app.set('view engine', 'pug'); // set the view enginer to pug templating
mongoose.connect(`mongodb://${auth.username}:${auth.password}@ds157278.mlab.com:57278/network-me-mongo`); 	// connect to the db

// controllers
const contactController = require('./controllers/contactController');
const groupController 	= require('./controllers/groupController');
contactController(app);
groupController(app);

// render the temple, which will just be the react application
app.get('/', function(req, res) {
	res.render('index');
});

// start the server
const port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('the application is running on port', port);
});