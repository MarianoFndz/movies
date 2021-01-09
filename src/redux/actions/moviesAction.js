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

export function popularMovies(data) {
  return async (dispatch) => {
    dispatch(popularMoviesStart());
    const { page } = data;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    const response = await getMoviesAPI(url);
    const movies = response.results;

    data = {
      ...data,
      response,
      movies,
    };

    const popularMovies = new MoviesFactory(
      data,
      (movies) => {
        dispatch(popularMoviesSucces(movies));
      },
      (movies) => {
        dispatch(popularMoviesError(movies));
      }
    );

    popularMovies.pushMoviesToState();
  };
}

export function filterMovies(data) {
  return async (dispatch) => {
    dispatch(filterMoviesStart());
    const { page, search } = data;
    const { text } = search;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US&query=${text}&page=${page}&include_adult=false`;

    const response = await getMoviesAPI(url);

    const movies = response.results;

    data = {
      ...data,
      response,
      movies,
    };

    const filterMovies = new MoviesFactory(
      data,
      (movies) => dispatch(filterMoviesSucces(movies)),
      (movies) => dispatch(filterrMoviesError(movies))
    );

    filterMovies.pushMoviesToState();
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
