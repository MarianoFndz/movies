//React
import { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { currentMovie } from "redux/actions/moviesAction";

const useSingleMovie = (id) => {
  const dispatch = useDispatch();
  const loadCurrentMovie = () => {
    dispatch(currentMovie(id));
  };

  useEffect(() => {
    console.log("SingleMovie");
    loadCurrentMovie();
  }, []);

  const movie = useSelector((state) => state.movies.currentMovie);
  const loading = useSelector((state) => state.movies.loading);

  return { movie, loading };
};

export default useSingleMovie;
