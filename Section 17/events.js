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
  //console.log("you pressed a key");
  //console.log(event);
  if (event.which == 13) {
    alert("you hit enter")
  }
});
