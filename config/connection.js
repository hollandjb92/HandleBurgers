const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'burger_DB'
});

connection.connect(err => {
  if (err) return console.error(`error connection: ${err.stack}`);

  console.log(`connected as id ${connection.threadId}`);
});


export {
  connection
};