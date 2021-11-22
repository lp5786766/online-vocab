var mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  // get all of our configuration values from the .env file
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query('SELECT * FROM words', function (err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}