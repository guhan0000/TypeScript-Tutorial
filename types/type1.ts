type Movie = {
  movieId: number;
  movieName: string;
  movieRating: number;
  movieGenre?: Array<string>;
};

const movie: Movie = {
  movieId: 1,
  movieName: "SpiderMan",
  movieRating: 7,
};
console.log(movie);
movie.movieId = 3;
console.log(movie);
let movie2: Movie;
movie2 = {
  movieId: 2,
  movieName: "Odyssey",
  movieRating: 9,
  movieGenre: ["drama", "history"],
};
console.log(movie2);
