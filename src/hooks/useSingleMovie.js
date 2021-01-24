//React
import { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { currentMovie, resetCurrentMovie } from "redux/actions/moviesAction";

const useSingleMovie = (id) => {
  const dispatch = useDispatch();

  const loadingCurrentMovie = () => {
    dispatch(currentMovie(id));
  };

  const cleaningStateOfCurrentMovie = () => {
    dispatch(resetCurrentMovie());
  };

  useEffect(() => {
    loadingCurrentMovie();
    return () => {
      cleaningStateOfCurrentMovie();
    };
  }, []);

  const movie = useSelector((state) => state.movies.currentMovie);
  const loading = useSelector((state) => state.movies.loading);

  return { movie, loading };
};

export default useSingleMovie;
