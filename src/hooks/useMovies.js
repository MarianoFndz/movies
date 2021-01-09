//React
import { useEffect, useState } from "react";
//React Redux
import { useDispatch, useSelector } from "react-redux";
import { popularMovies, filterMovies } from "redux/actions/moviesAction";
//React router
import { useLocation } from "react-router-dom";

const INITIAL_PAGE = 1;

const useMovies = (loadMoviesAction) => {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [currentSearch, setSearch] = useState({ rating: 0, text: "" });
  const search = useSelector((state) => state.movies.search);
  const currentMovies = useSelector((state) => state.movies.movies);

  const loadNextMovies = () => {
    loadMoviesAction({ search, page, currentMovies });
  };

  const loadMovies = () => {
    loadMoviesAction({ search, INITIAL_PAGE, currentMovies });
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
  return { setPage, search };
};

export default useMovies;
