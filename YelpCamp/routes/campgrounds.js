var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")

// ===========
// CAMPGROUND ROUTES
// ===========

// INDEX route
router.get("/", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
    }
  });
});

// CREATE route
router.post("/", isLoggedIn, function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {name: name, image: image, description: desc, author:author};
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log(newlyCreated);
      res.redirect("/campgrounds");
    }
  });
});

// NEW route
router.get("/new", isLoggedIn, function(req, res) {
  res.render("campgrounds/new");
});

// SHOW route
router.get("/:id", function(req, res) {
  // find campground with provided id
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
    if (err) {
      console.log(err);
    } else {
      // render show
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});

// Middleware
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
