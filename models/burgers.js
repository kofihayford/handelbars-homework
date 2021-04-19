
// import the ORMs 

var orm = require("../configs/orms")



// Create Code to call ORMs functions 
var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            console.log("hello, world")
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


// Export at the end of the burger.js file 

module.exports = burger;