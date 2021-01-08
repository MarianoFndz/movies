//React
import { useEffect, useState } from "react";
//React Redux
import { useDispatch, useSelector } from "react-redux";
import { popularMovies, filterMovies } from "redux/actions/moviesAction";
//React router
import { useLocation } from "react-router-dom";

const INITIAL_PAGE = 1;

const useMovies = () => {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [currentSearch, setSearch] = useState({ rating: 0, text: "" });
  const search = useSelector((state) => state.movies.search);
  const movies = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();
  const location = useLocation();

  const loadPopularMovies = (search, page, movies) =>
    dispatch(popularMovies(search, page, movies));

  const loadFilterMovies = (search, page, movies) =>
    dispatch(filterMovies(search, page, movies));

  const loadNextMovies = () => {
    if (location.pathname === "/") loadPopularMovies(search, page, movies);
    else loadFilterMovies(search, page, movies);
  };

  const loadMovies = () => {
    if (location.pathname === "/")
      loadPopularMovies(search, INITIAL_PAGE, movies);
    else loadFilterMovies(search, INITIAL_PAGE, movies);
  };

  useEffect(() => {
    setSearch(search);
  }, []);

  useEffect(() => {
    if (currentSearch === search) {
      loadNextMovies();
    } else {
      loadMovies();
      setSearch(search);
    }
  }, [page, search]);
  return { setPage };
};

export default useMovies;
