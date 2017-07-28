var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// button.addEventListener("click", function(){
//   paragraph.textContent = "Someone Clicked the Button!"
// });

paragraph.addEventListener("click", function(){
	alert("paragraph was clicked");
  paragraph.style.background = "orange";
});

document.querySelector("ul").addEventListener("click", function(){
  console.log("You clicked the UL!");
});

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function(){
    this.style.color = "pink";
  });
}

function changeText() {
  paragraph.textContent = "Yo clicked the button";
}

button.addEventListener("click", changeText);
