// Set up MySQL database.
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "`<>M3ns@h9!4321</>`",
    database: "burgerdb"
});
// Make the database connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// To make sure ORM can access export connection
module.exports = connection;