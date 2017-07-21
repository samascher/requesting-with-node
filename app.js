var movie = require("./movie");
var threeFavoriteMovies = ['legally blonde', 'mamma mia', 'the royal tennanbaums'];
threeFavoriteMovies.forEach(function(film){
  movie(film);
});