const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Tony", "Miranda", "Justin", "Pier", "Lily"];

app.get("/", function(req, res) {
  res.render("home");
});

app.post("/addfriend", function(req, res) {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
})

app.listen(3000, function(){
  console.log("Server runing")
});
