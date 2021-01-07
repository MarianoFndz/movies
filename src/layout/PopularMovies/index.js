//Components
import Movies from "components/Movies";
import Next from "components/Next";
//Styled Components
import { Container, Title } from "./styles";
//Custom hooks
import useMovies from "hooks/useMovies";

const PopularMovies = () => {
  const { movies, setPage, page } = useMovies();

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <Next handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
      <Container>
        <Title>POPULAR MOVIES</Title>
        <Movies movies={movies} />
      </Container>
      <Next handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </>
  );
};

export default PopularMovies;
