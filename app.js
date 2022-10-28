const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render('home', {pageTitle: "Home"});
});
app.get("/about", function(req, res) {
    res.render('about', {pageTitle: "About"});
})
app.get("/contact", function(req, res) {
    res.render('contact', {pageTitle: "Contact"});
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});