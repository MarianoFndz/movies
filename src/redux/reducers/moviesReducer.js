import updateObject from "utilities/updateObject";

const initialState = {
  popularMovies: [],
  error: null,
  loading: false,
};

const getPopularMovies = (state, action) => {
  return updateObject(state, {
    loading: action.payload,
  });
};

const getPopularMoviesSucces = (state, action) => {
  return updateObject(state, {
    popularMovies: action.payload,
    loading: false,
  });
};

const getPopularMoviesError = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  const obj = {
    GET_POPULAR_MOVIES: function () {
      return getPopularMovies(state, action);
    },
    GET_POPULAR_MOVIES_SUCCES: function () {
      return getPopularMoviesSucces(state, action);
    },
    GET_POPULAR_MOVIES_ERROR: function () {
      return getPopularMoviesError(state, action);
    },
    default: state,
  };

  return typeof obj[action.type] === "function"
    ? obj[action.type]()
    : obj["default"];
};

export default reducer;
