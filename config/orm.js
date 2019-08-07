const connection = require("./connection");

function printQuestionMarks(num) {
  const arr = [];

  for (i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}





module.exports = ORM = {
  selectAll: function (table, cb) {
    const queryString = "SELECT * FROM " + table + ";";

    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    })
  },


  insertOne: function (table, column, value, cb) {
    let queryString = "INSERT INTO " + table + " (";

    queryString += column.toString() + ") VALUES (";
    queryString += printQuestionMarks(value.length) + ")";



    connection.query(queryString, value, (err, res) => {
      if (err) throw err

      cb(res);
    })

  },

  updateOne: function (table, newValue, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(newValue);
    queryString += " WHERE ";
    queryString += condition;


    connection.query(queryString, function (err, result) {
      if (err) throw err


      cb(result);
    });
  },

  deleteOne: function (table, deleteCondition, cb) {

    let queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += deleteCondition;

    connection.query(queryString, (err, res) => {
      if (err) throw err

      cb(res);
    })
  }


};