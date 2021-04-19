// Inside the burgercontroller.js file and import:
// Express
var express = require("express");

// burger.js
var burger = require("../models/burgers.js");

// Create the router for the app... 
var routing = express.Router();

// Create routes and set up logic within those routes where required.
routing.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

routing.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.name
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

routing.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            console.log("is our problem here?")
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export the router 
module.exports = routing;