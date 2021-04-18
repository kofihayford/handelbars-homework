//Declare express 
var express = require("express");

// pull in password and designate theport
var PORT = process.env.PORT || 8080;

var app = express();

// This is where to find the content to display. Serve static content for the app from the public  directory in the app directory. 
app.use(express.static("public"));

// Parse body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars 
var expresshbrs = require("express-handlebars");
app.engine("handlebars", expresshbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import the routes and give server access to routes.
var routing = require("./controllers/burgers_controller.js");
app.use(routing);

// Start the server start listening to requests.
app.listen(PORT, function () {

    // Log server initiation
    console.log("Server listening on: http://localhost:" + PORT);
});