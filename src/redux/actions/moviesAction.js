import {
  GET_POPULAR_MOVIES,
  GET_POPULAR_MOVIES_SUCCES,
  GET_POPULAR_MOVIES_ERROR,
  GET_FILTER_MOVIES,
  GET_FILTER_MOVIES_SUCCES,
  GET_FILTER_MOVIES_ERROR,
  SET_SEARCH_MOVIE,
  GET_CURRENT_MOVIE,
  GET_CURRENT_MOVIE_SUCCES,
  GET_CURRENT_MOVIE_ERROR,
} from "redux/types";

export function popularMovies(search, page, currentMovies = []) {
  return async (dispatch) => {
    const { rating } = search;
    dispatch(popularMoviesStart());
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    let movies = responseJson.results;
    if (response.status === 200) {
      if (rating !== 0) {
        movies = movies.filter(
          (element) =>
            element.vote_average <= rating && element.vote_average >= rating - 2
        );
      }
      if (page > 1) {
        movies = currentMovies.concat(movies);
        dispatch(popularMoviesSucces(movies));
      } else dispatch(popularMoviesSucces(movies));
    } else dispatch(popularMoviesError());
  };
}

export function filterMovies(data, page, currentMovies) {
  return async (dispatch) => {
    const { text, rating } = data;
    console.log(page);
    dispatch(filterMoviesStart());
    const url = `https://api.themoviedb.org/3/search/movie?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US&query=${text}&page=${page}&include_adult=false`;
    const response = await fetch(url);
    const responseJson = await response.json();
    let movies = responseJson.results;

    if (response.status === 200) {
      if (rating !== 0)
        movies = movies.filter(
          (element) =>
            element.vote_average <= rating && element.vote_average >= rating - 2
        );
      if (page > 1) {
        movies = currentMovies.concat(movies);
        dispatch(filterMoviesSucces(movies));
      }
      dispatch(filterMoviesSucces(movies));
    } else dispatch(filterrMoviesError());
  };
}

export function currentMovie(id) {
  return async (dispatch) => {
    dispatch(currentMoviesStart());
    const url = ` https://api.themoviedb.org/3/movie/${id}?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US`;
    const response = await fetch(url);
    const movie = await response.json();

    if (response.status === 200) {
      dispatch(currentMoviesSucces(movie));
    } else dispatch(currentMoviesError());
  };
}

//========= POPULAR MOVIES ============
const popularMoviesStart = () => ({
  type: GET_POPULAR_MOVIES,
  payload: true,
});

const popularMoviesSucces = (response) => ({
  type: GET_POPULAR_MOVIES_SUCCES,
  payload: response,
});

const popularMoviesError = () => ({
  type: GET_POPULAR_MOVIES_ERROR,
  payload: true,
});

//========= FILTER MOVIES ============
const filterMoviesStart = () => ({
  type: GET_FILTER_MOVIES,
  payload: true,
});

const filterMoviesSucces = (response) => ({
  type: GET_FILTER_MOVIES_SUCCES,
  payload: response,
});

const filterrMoviesError = () => ({
  type: GET_FILTER_MOVIES_ERROR,
  payload: true,
});

//========= CURRENT MOVIES ==============
const currentMoviesStart = () => ({
  type: GET_CURRENT_MOVIE,
  payload: true,
});

const currentMoviesSucces = (response) => ({
  type: GET_CURRENT_MOVIE_SUCCES,
  payload: response,
});

const currentMoviesError = () => ({
  type: GET_CURRENT_MOVIE_ERROR,
  payload: true,
});

//======= SEARCH MOVIE ================

export const searchMovie = (data) => ({
  type: SET_SEARCH_MOVIE,
  payload: data,
});
