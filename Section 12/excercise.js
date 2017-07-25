movies = [
  {
    title: "Avengers",
    rating: 5,
    hasWatched: true
  },

  {
    title: "Sherlock",
    rating: 4.5,
    hasWatched: true
  },

  {
    title:"Trainspotting",
    rating: 4.1,
    hasWatched: false
  }
];

var string;
movies.forEach(function(movie){
  if (movie.hasWatched) {
    string += "You have seen ";
  } else {
    string += "You have not seen ";
  }

  string = string + movie.title + " - " + movie.rating + " stars";
  console.log(string);
  string = "";
});
