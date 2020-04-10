const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js")

router.get("/", function(req, res){ // The forward slash is the route. 
    burger.selectAll(function(data){ // selecting everything from the table
        var hbsObject={
            burgers: data
        }
    res.render("index", hbsObject) // Get route which gets a response. It will render index.handlebars
    })
})
 router.post("/api/burgers", function(req, res){ //this is a post route. Posting in the burgers table
     burger.insertOne(req.body.burger_name, 0, function(result){ //inserting one input into the table, request from front end. 0 is a boolean. 
         res.redirect("/") //if everything is going right, you get redirected to that route
     })
 })

 module.exports = router;