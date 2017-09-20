const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

var data = [
  {
    name: "Cloud's Rest",
    image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis laoreet consectetur. Maecenas purus sem, ultrices vel feugiat vitae, euismod et mi. Praesent lacinia vulputate pellentesque. Integer odio diam, pharetra quis sapien sit amet, lobortis consequat diam. Suspendisse at magna non magna malesuada finibus eu nec elit. Suspendisse pellentesque nisl et massa pellentesque, sed iaculis metus suscipit. Maecenas ac tempor neque. Pellentesque lacinia ac odio a ullamcorper. Ut molestie eleifend arcu vel aliquam. In metus magna, congue vel tortor et, bibendum aliquet purus. Suspendisse congue quam nisi, vitae ornare eros mattis at. Mauris bibendum risus vel odio maximus viverra. Mauris elit sem, consectetur in lacus euismod, interdum bibendum neque. Nam varius ut mi quis accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at erat venenatis, aliquam ligula eget, convallis ligula."
  },
  {
    name: "Desert Mesa",
    image:"https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis laoreet consectetur. Maecenas purus sem, ultrices vel feugiat vitae, euismod et mi. Praesent lacinia vulputate pellentesque. Integer odio diam, pharetra quis sapien sit amet, lobortis consequat diam. Suspendisse at magna non magna malesuada finibus eu nec elit. Suspendisse pellentesque nisl et massa pellentesque, sed iaculis metus suscipit. Maecenas ac tempor neque. Pellentesque lacinia ac odio a ullamcorper. Ut molestie eleifend arcu vel aliquam. In metus magna, congue vel tortor et, bibendum aliquet purus. Suspendisse congue quam nisi, vitae ornare eros mattis at. Mauris bibendum risus vel odio maximus viverra. Mauris elit sem, consectetur in lacus euismod, interdum bibendum neque. Nam varius ut mi quis accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at erat venenatis, aliquam ligula eget, convallis ligula."
  },
  {
    name: "Canyon Floor",
    image:"https://farm3.staticflickr.com/2919/14554501150_8538af1b56.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis laoreet consectetur. Maecenas purus sem, ultrices vel feugiat vitae, euismod et mi. Praesent lacinia vulputate pellentesque. Integer odio diam, pharetra quis sapien sit amet, lobortis consequat diam. Suspendisse at magna non magna malesuada finibus eu nec elit. Suspendisse pellentesque nisl et massa pellentesque, sed iaculis metus suscipit. Maecenas ac tempor neque. Pellentesque lacinia ac odio a ullamcorper. Ut molestie eleifend arcu vel aliquam. In metus magna, congue vel tortor et, bibendum aliquet purus. Suspendisse congue quam nisi, vitae ornare eros mattis at. Mauris bibendum risus vel odio maximus viverra. Mauris elit sem, consectetur in lacus euismod, interdum bibendum neque. Nam varius ut mi quis accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at erat venenatis, aliquam ligula eget, convallis ligula."
  }
]

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Removed Campgrounds");
    // Add a few campgrounds
    data.forEach(function(seed) {
        Campground.create(seed, function(err, campground) {
          if (err) {
            console.log(err);
          } else {
            console.log("Added a campground");
            // create a comment
            Comment.create(
              {
                text: "This place is great, but I wish there was internet",
                author: "Homer"
              }, function(err, comment) {
                if (err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                }
              });
          }
        });
    });
  });
  // Add a few comments
}

module.exports = seedDB;
