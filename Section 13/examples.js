// Select an element
var h1 = document.querySelector("h1");

// Change its color
h1.style.color = "pink";

// Change background color to blue
var body = document.querySelector("body");
var isBlue = false;
setInterval(function(){
  if(isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 1000);
