const orm = require('../config/orm.js');

//creates a burger object with methods attached

const burger = {
  //select all burgers
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  //create burger
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //update burger to being devoured
  eat: function(objColVals2, condition2, cb) {
    orm.update("burgers", "devoured", "TRUE", objColVals2, condition2, function(res) {
      cb(res);
    });
  },
  //update to uneaten
  makeAnother: function(objColVals2, condition2, cb) {
    orm.update("burgers", "devoured", "FALSE", objColVals2, condition2, function(res) {
      cb(res);
    });
  }
}


module.exports = burger;