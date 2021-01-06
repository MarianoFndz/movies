import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popularMovies, filterMovies } from "redux/actions/moviesAction";
import { useLocation } from "react-router-dom";

const INITIAL_PAGE = 1;

export default function useMovies() {
  const [page, setPage] = useState(INITIAL_PAGE);

  const dispatch = useDispatch();
  const location = useLocation();

  const loadPopularMovies = (search, page, movies) =>
    dispatch(popularMovies(search, page, movies));

  const loadFilterMovies = (search, page, movies) =>
    dispatch(filterMovies(search, page, movies));

  const search = useSelector((state) => state.movies.search);
  const movies = useSelector((state) => state.movies.movies);

  const loadMovies = () => {
    if (location.pathname === "/") loadPopularMovies(search, page);
    else loadFilterMovies(search, page);
  };

  useEffect(() => {
    console.log("Movies render");
    loadMovies();
  }, [page, search]);

  const loading = useSelector((state) => state.movies.loading);
  const data = { movies, loading, setPage, page };

  return data;
}
