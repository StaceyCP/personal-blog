const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let posts = [];

app.get("/", function(req, res) {
    res.render('home', {pageTitle: "Home", posts: posts});
});
app.get("/about", function(req, res) {
    res.render('about', {pageTitle: "About"});
});
app.get("/contact", function(req, res) {
    res.render('contact', {pageTitle: "Contact"});
});
app.get("/compose", function(req, res) {
    res.render('compose', {pageTitle: "Compose"});
});
app.get("/posts", function(req, res) {
    res.render('posts', {pageTitle: "Posts", posts: posts});
});



app.post("/", function(req, res) {
    let postTitle = req.body.postTitle
    let postContent = req.body.postContent
    posts.push({postTitle, postContent});
    console.log(posts);
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
