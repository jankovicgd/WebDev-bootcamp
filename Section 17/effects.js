$("#out").on("click", function(){
  $("div").fadeOut(1000, function(){
    console.log("Fade completed"); // runs as callback when finished for each element
  });
  console.log("Fade not completed"); // runs as soon as possible
});

$("#in").on("click", function(){
  $("div").fadeIn(1000, function(){
    console.log("Fade completed");
  });
  console.log("Fade not completed");
});


$("#slideUp").on("click", function(){
  $("div").slideUp();
});

$("#slideDown").on("click", function(){
  $("div").slideDown();
});

$("#slideTog").on("click", function(){
  $("div").slideToggle();
});
