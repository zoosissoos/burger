const mysql = require("mysql");

//creates db connection
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "honeybees",
  database: "burgers_db"
})

//tests connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exports connection
module.exports = connection;