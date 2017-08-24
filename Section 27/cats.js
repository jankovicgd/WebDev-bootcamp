var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

// Pattern
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// Pattern and methods -> model
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save(function(err, cat) {
//   if(err){
//     console.log("Something went wrong!");
//   } else {
//     console.log("Saved a cat to the DB");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "Bland"
}, function(err, cat) {
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
});

//retrieve all cats from DB and console.log

Cat.find({}, function(err, cats) {
  if(err){
    console.log("Oh no errrorrr!");
    console.log(err);
  } else {
    console.log("All The Cats!");
    console.log(cats);
  }
});
