const mysql = require('mysql');
const mysqlConfig = require('./config.js');

// UNCOMMENT FOR SEQUELIZE

const Sequelize = require('sequelize');

const connection = new Sequelize('transit_planner', 'root', 'dphp94903', {
	host: 'localhost',
	dialect: 'mysql',
});

connection
	.authenticate()
	.then(() => console.log('successfully authenticated connected'))
	.catch(err => console.log('error authenticating connection'));

// UNCOMMENT FOR NO ORM
// const connection = mysql.createConnection(mysqlConfig);

const getAllLines = function(callback) {
	// TODO - your code here!
};

module.exports = {
	getAllLines,
	// UNCOMMENT FOR SEQUELIZE
	connection,
};
