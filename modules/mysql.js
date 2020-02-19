const mysql = require('mysql2');

const connect = mysql.createPool({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "000000",
	database: "node",
	connectionLimit: 10
});

module.exports = { connect };