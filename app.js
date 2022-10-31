const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let posts = [];

app.get("/", (req, res) => {
    res.render('home', {pageTitle: "Home", posts: posts});
});
app.get("/about", (req, res) => {
    res.render('about', {pageTitle: "About"});
});
app.get("/contact", (req, res) => {
    res.render('contact', {pageTitle: "Contact"});
});
app.get("/compose", (req, res) => {
    res.render('compose', {pageTitle: "Compose"});
});

app.post("/compose", (req, res) => {
    let post = {
        postTitle: req.body.postTitle,
        postContent: req.body.postContent
    };
    posts.push(post);
    res.redirect("/");
});

app.get("/posts/:postTitle", (req, res) => {
    const requestedTitle = _.lowerCase(req.params.postTitle);

    posts.forEach(function(post) {
        var storedTitle = _.lowerCase(post.postTitle);
        if (storedTitle === requestedTitle) {
            res.render('post', {pageTitle: post.postTitle, posts: posts, content: post.postContent})
        }
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
