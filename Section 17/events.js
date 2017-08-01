$('h1').click(function(){
  alert("you clicked the h1");
});

$('button').click(function(){
  alert("I told you not to click");
});

$('#baton').click(function(){
  $(this).css('background', 'pink');
});

$('button').click(function(){
  console.log($(this).text());
});

$('input').keypress(function(event) {
  // console.log("you pressed a key");
  // console.log(event);
  if (event.which == 13) {// if enter is pressed Enter == 13
    alert("you hit enter")
  }
});

$("h1").on("click", function() {
  $(this).css("color", "purple");
});

$("input").on("keypress", function() {
  console.log("keypressed");
});

$("button").on("mouseenter",function(){
  // console.log("mouse enter!");
  $(this).css("font-weight", "bold");
})

$("button").on("mouseleave",function(){
  // console.log("mouse enter!");
  $(this).css("font-weight", "normal");
})
