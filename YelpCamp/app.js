var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var campgrounds = [
  {name: "Salmon Creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Granite Hill", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
  {name: "Ducks rest", image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
  {name: "Salmon Creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Granite Hill", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
  {name: "Ducks rest", 
  image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Granite Hill", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
  {name: "Ducks rest", image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);

  res.redirect("/campgrounds");
});

app.listen(3000, function() {
  console.log("YelpCamp server running on port 3000");
});
