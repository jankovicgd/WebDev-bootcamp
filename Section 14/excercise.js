var button = document.querySelector("button");

// button.addEventListener("click", function(){
//   if (document.body.style.backgroundColor == "") {
//     document.body.style.backgroundColor = "purple";
//   } else {
//     document.body.style.backgroundColor = "";
//   }
// });

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});
