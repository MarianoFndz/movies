import {
  GET_POPULAR_MOVIES,
  GET_POPULAR_MOVIES_SUCCES,
  GET_POPULAR_MOVIES_ERROR,
} from "redux/types";

export function popularMovies() {
  return async (dispatch) => {
    dispatch(popularMoviesStart());
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=73faf0da9a32b7975953fed9a7fed103&language=en-US&page=1"
    );
    const movies = await response.json();
    console.log(response);
    response.status === 200
      ? dispatch(popularMoviesSucces(movies))
      : dispatch(popularMoviesError());
  };
}

const popularMoviesStart = () => ({
  type: GET_POPULAR_MOVIES,
  payload: true,
});

const popularMoviesSucces = (response) => ({
  type: GET_POPULAR_MOVIES_SUCCES,
  payload: response.results,
});

const popularMoviesError = (err) => ({
  type: GET_POPULAR_MOVIES_ERROR,
  payload: true,
});
