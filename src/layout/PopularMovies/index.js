//Styled Components
import { Container, Title } from "./styles";
import Movies from "components/Movies";
import useMovies from "hooks/useMovies";
import Spinner from "components/Spinner";
import Next from "components/Next";

import { Fragment, useCallback } from "react";

export default function PopularMovies() {
  const { loading, movies, setPage, page } = useMovies();

  const handleNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, [setPage]);

  const handlePrevPage = useCallback(() => {
    if (page === 1) return;
    setPage((prevPage) => prevPage - 1);
  }, [page, setPage]);

  console.log(page);

  return (
    <>
      <Next handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
      <Container>
        <Title>POPULAR MOVIES</Title>
        {loading ? <Spinner /> : <Movies movies={movies} />}
      </Container>
      <Next handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </>
  );
}
