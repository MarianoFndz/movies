import { currentMovie } from "redux/actions/moviesAction";
import { isRequestSucces } from "utilities/getMoviesAPI";

class MoviesFactory {
  constructor(data, dispatchSucces, dispatchError) {
    const { response, currentMovies, movies, page, search } = data;
    this.text = search.text;
    this.rating = search.rating;
    this.response = response;
    this.page = page;
    this.currentMovies = currentMovies;
    this.movies = movies;
    this.dispatchSucces = dispatchSucces;
    this.dispatchError = dispatchError;
  }
  filterByRating() {
    if (this.rating !== 0) {
      this.movies = this.movies.filter(
        (element) =>
          element.vote_average <= this.rating &&
          element.vote_average >= this.rating - 2
      );
    }
  }
  addPage() {
    if (this.page > 1) {
      this.movies = this.currentMovies.concat(this.movies);
      this.dispatchSucces(this.movies);
    } else this.dispatchSucces(this.movies);
  }
  pushMoviesToState() {
    isRequestSucces(
      this.response,
      () => {
        this.filterByRating();
        this.addPage();
      },
      () => {
        this.dispatchError();
      }
    );
  }
}

// const MoviesFactory = (dispatchSucces, dispatchError) => {
//   const obj = {
//     response: "",
//     page: 0,
//     rating: 0,
//     text: "",
//     currentMovies: [],
//     movies: [],
//     dispatchSucces: dispatchSucces,
//     dispatchError: dispatchError,
//     filterByRating: function () {
//       if (this.rating !== 0) {
//         this.movies = this.movies.filter(
//           (element) =>
//             element.vote_average <= this.rating &&
//             element.vote_average >= this.rating - 2
//         );
//       }
//     },
//     addPage: function () {
//       if (this.page > 1) {
//         this.movies = this.currentMovies.concat(this.movies);
//         this.dispatchSucces(this.movies);
//       } else this.dispatchSucces(this.movies);
//     },
//     isRequestSucces: function () {
//       isRequestSucces(
//         this.response,
//         () => {
//           this.filterByRating();
//           this.addPage();
//         },
//         () => {
//           this.dispatchError();
//         }
//       );
//     },
//   };
//   return obj;
// };

export default MoviesFactory;
