const connection = require('../config/connection.js');


let orm = {
  //select all function
  all: function(table, cb) {
    var queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //insert new row into col function
  create: function(table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`;
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //updates the condition of an item based on another condition
  update: function(table, objColVals1, condition1, objColVals2, condition2, cb) {
    var queryString = `UPDATE ${table} SET ${objColVals1} = ${condition1} WHERE ${objColVals2} = ${condition2};`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //deletes burger
  delete: function(table, condition, val, cb) {
    var queryString = `DELETE FROM ${table} WHERE ${condition} = ${val};`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}


module.exports = orm;

