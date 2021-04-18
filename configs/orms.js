// First import the MySQL database connection
var connection = require("./connections");

// Using this fucntion to attach question marks to each MySQL query. Using a for loop to make an array of question marks. Then we can use toString to put it together. 
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Using Another helper function to convert object key/value pairs to the correct SQL Syntax. 
function makeSqlObj(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // Makes the data more readable by SQL by make it a string with quotes
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            //putting quotes around the "name" as well as replacing : with =.
            arr.push(key + "=" + value);
        }
    }
    // change array of strings into one longer string separated by commas
    return arr.toString();
}

//create one object for all SQL statement functions. 
var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //************************************************* *//
    //CRUD Stuff 

    //Add new burgers to the database - CREATE 
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // UPDATE
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += " WHERE ";
        queryString += makeSqlObj(objColVals);
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Through module.exports we can now export the ORM object
module.exports = orm;