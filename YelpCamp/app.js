var express        = require('express'),
    passport       = require("passport"),
    mongoose       = require('mongoose'),
    bodyParser     = require('body-parser'),
    LocalStrategy  = require("passport-local"),
    seedDB         = require("./seeds"),
    methodOverride = require("method-override");

// Requiring models
var User          = require("./models/user"),
    Comment       = require("./models/comment"),
    Campground    = require("./models/campground");

// Requiring routes
var indexRoutes      = require("./routes/index"),
    commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds");

// INITIAL
var app = express();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//seedDB(); // Seed the Database

app.use(require("express-session")({
  secret: "Partly fart smart shart",
  resave: false,
  saveUninitialize: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

app.listen(3000, function() {
  console.log("YelpCamp server running on port 3000");
});
