// Set up MySQL database.
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "g5xshohvquambere",
    password: "w16ymq3usw48846k",
    database: "wsa77km9wcdjlxfo"
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