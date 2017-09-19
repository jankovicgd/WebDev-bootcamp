const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


Post.create({
  title: "How to cook burger everest pt3524",
  content: "Blah blah blahare blarghn"
}, function(err, post) {
  User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      foundUser.posts.push(post);
      foundUser.save(function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
});

// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// });

// FInd user and posts
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });
