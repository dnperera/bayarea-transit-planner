const express = require('express');
const bodyParser = require('body-parser');

// UNCOMMENT FOR NO ORM
// const db = require('../database-mysql');

// UNCOMMENT FOR SEQUELIZE
require('../database-mysql');

const db = require('../database-mysql/schema');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/api/lines', (req, res) => {
	// TODO - your code here!
	db.service_lines.findAll({}).then(lines => {
		res.json(lines);
	});
});

// Write additional route handlers as needed below!

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
