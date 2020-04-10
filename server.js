const express = require('express');
// const bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;

var app = express(); //declared a variable to store express. Called it app

app.use(express.static("public")); //The app will use your public folder: javascript, css

app.use(express.json()); //The app is going to use the json file

app.use(express.urlencoded({extended:true})) // The app will use the url when deployed

var exphbs = require('express-handlebars') //Declare a variable with express handlebars

app.engine("handlebars", exphbs({defaultLayout:"main"})) // The app will use my main.handlebars when the app starts

app.set("view engine", "handlebars") // The engine will be used to display handlebars

var routes = require("./controllers/burgers_controller") //Declared the variable and will use the burgers controller file

app.use(routes) // the app will use the routes variable

app.listen(PORT, function() {
    console.log("server is listening on PORT, " + PORT) //The app will use the PORT above, 8080
})