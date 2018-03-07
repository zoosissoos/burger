let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');


//get all burgers route
router.get("/", function(req,res){
  burger.all(function(data){
    let burgData = {
      burgers: data
    };
    console.log(burgData);
    res.render('index', burgData);
  });
});

//post new burger route
router.post('/create/new', function (req, res) {
  burger.create("burger_name", req.body.burger ,function() {
    res.redirect('/');
  });
});

//eats a burger
router.put("/eat/:id", function(req, res) {
  burger.eat("id", [req.params.id] ,function(){
    res.redirect('/');
  })
});

//remakes burger
router.put("/make/:id", function(req, res) {
  burger.makeAnother("id", [req.params.id] ,function(){
    res.redirect('/');
  })
});

//delete burger
router.delete("/delete/:id", function(req, res) {
  burger.deleteBurg("id", [req.params.id] ,function(){
    res.redirect('/');
  })
});

module.exports = router;