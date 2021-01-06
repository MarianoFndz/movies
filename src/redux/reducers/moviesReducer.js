import updateObject from "utilities/updateObject";

const initialState = {
  movies: [],
  error: null,
  loading: false,
  search: {
    text: "",
    rating: 0,
  },
  currentMovie: {},
};

//====== MOVIES ==========
const getMovies = (state, action) => {
  return updateObject(state, {
    loading: action.payload,
  });
};

const getMoviesSucces = (state, action) => {
  return updateObject(state, {
    movies: action.payload,
    loading: false,
  });
};

const getMoviesError = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false,
  });
};

//======= CURRENT MOVIE =========
const getCurrentMovie = (state, action) => {
  return updateObject(state, {
    loading: action.payload,
  });
};

const getCurrentMovieSucces = (state, action) => {
  return updateObject(state, {
    currentMovie: action.payload,
    loading: false,
  });
};

const getCurrentMovieError = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false,
  });
};

//======= SEARCH MOVIE ==========

const searchMovie = (state, action) => {
  return updateObject(state, {
    search: action.payload,
  });
};

const reducer = (state = initialState, action) => {
  const obj = {
    GET_POPULAR_MOVIES: function () {
      return getMovies(state, action);
    },
    GET_POPULAR_MOVIES_SUCCES: function () {
      return getMoviesSucces(state, action);
    },
    GET_POPULAR_MOVIES_ERROR: function () {
      return getMoviesError(state, action);
    },
    GET_FILTER_MOVIES: function () {
      return getMovies(state, action);
    },
    GET_FILTER_MOVIES_SUCCES: function () {
      return getMoviesSucces(state, action);
    },
    GET_FILTER_MOVIES_ERROR: function () {
      return getMoviesError(state, action);
    },
    GET_CURRENT_MOVIE: function () {
      return getCurrentMovie(state, action);
    },
    GET_CURRENT_MOVIE_SUCCES: function () {
      return getCurrentMovieSucces(state, action);
    },
    GET_CURRENT_MOVIE_ERROR: function () {
      return getCurrentMovieError(state, action);
    },
    SET_SEARCH_MOVIE: function () {
      return searchMovie(state, action);
    },
    default: state,
  };

  return typeof obj[action.type] === "function"
    ? obj[action.type]()
    : obj["default"];
};

export default reducer;
