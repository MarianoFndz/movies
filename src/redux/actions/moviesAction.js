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
import getMoviesAPI, { isRequestSucces } from "utilities/getMoviesAPI";
import MoviesFactory from "utilities/MoviesFactory";

export function popularMovies({ rating, text }, page, currentMovies = []) {
  return async (dispatch) => {
    dispatch(popularMoviesStart());
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    const response = await getMoviesAPI(url);
    let movies = response.results;
    const popularMovies = MoviesFactory(
      (movies) => {
        dispatch(popularMoviesSucces(movies));
      },
      (movies) => {
        dispatch(popularMoviesError(movies));
      }
    );

    popularMovies.rating = rating;
    popularMovies.text = text;
    popularMovies.page = page;
    popularMovies.currentMovies = currentMovies;
    popularMovies.response = response;
    popularMovies.movies = movies;
    popularMovies.isRequestSucces();
  };
}

export function filterMovies({ text, rating }, page, currentMovies) {
  return async (dispatch) => {
    console.log(page);
    dispatch(filterMoviesStart());
    const url = `https://api.themoviedb.org/3/search/movie?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US&query=${text}&page=${page}&include_adult=false`;
    const response = await getMoviesAPI(url);
    let movies = response.results;

    let filterMovies = MoviesFactory(
      (movies) => dispatch(filterMoviesSucces(movies)),
      (movies) => dispatch(filterrMoviesError(movies))
    );

    filterMovies.rating = rating;
    filterMovies.text = text;
    filterMovies.page = page;
    filterMovies.currentMovies = currentMovies;
    filterMovies.response = response;
    filterMovies.movies = movies;
    filterMovies.isRequestSucces();
  };
}

export function currentMovie(id) {
  return async (dispatch) => {
    dispatch(currentMoviesStart());
    const url = ` https://api.themoviedb.org/3/movie/${id}?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US`;
    const response = await getMoviesAPI(url);

    isRequestSucces(
      response,
      () => dispatch(currentMoviesSucces(response)),
      () => dispatch(currentMoviesError())
    );
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
