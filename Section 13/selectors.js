var tag = document.getElementById('highlight');
console.log(tag);

var tags = document.getElementsByClassName("bolded");
console.log(tags);

var tags2 = document.getElementsByTagName("li");
console.log(tags2);

var tag2 = document.querySelector("#highlight");
console.log(tag2);

var tag3 = document.querySelector(".bolded"); // returns only one element
console.log(tag3);

var h1 = document.querySelector("h1");
console.log(h1);

var li = document.querySelector("#highlight");
console.log(li);

var li2 = document.querySelector(".bolded");
console.log(li2);

var liall = document.querySelectorAll("li");
console.log(liall);
