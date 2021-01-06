import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popularMovies, filterMovies } from "redux/actions/moviesAction";
import { useLocation } from "react-router-dom";

export default function Movies() {
  const dispatch = useDispatch();
  const location = useLocation();
  const loadMovies = (search) => dispatch(popularMovies(search));
  const loadFilterMovies = (search) => dispatch(filterMovies(search));
  const search = useSelector((state) => state.movies.search);

  useEffect(() => {
    console.log("Movies render");
    if (location.pathname === "/") loadMovies(search);
    else loadFilterMovies(search);
  }, [search]);

  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const data = { movies: movies, loading: loading };

  return data;
}
