//Components
import Movies from "components/Movies";
import Next from "components/Next";
//Hooks
import useMovies from "hooks/useMovies";
//Styled Components
import { Container, Title } from "./styles";

const FilterMovies = () => {
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
        <Title>FILTER MOVIES</Title>
        <Movies movies={movies} />
      </Container>
      <Next handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </>
  );
};

export default FilterMovies;
