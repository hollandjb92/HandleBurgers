const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'burgers_DB',
    port: 3306
  });
}



connection.connect(err => {
  if (err) return console.error(`error connection: ${err.stack}`);

  console.log(`connected as id ${connection.threadId}`);
});


module.exports = connection;