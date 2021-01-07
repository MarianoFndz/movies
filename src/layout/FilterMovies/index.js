//Components
import Spinner from "components/Spinner";
import Movies from "components/Movies";
import Next from "components/Next";
//Hooks
import useMovies from "hooks/useMovies";
//Styled Components
import { Container, Title } from "./styles";

export default function FilterMovies() {
  const { loading, movies } = useMovies();

  return (
    <>
      <Next />
      <Container>
        <Title>FILTER MOVIES</Title>
        {loading ? <Spinner /> : <Movies movies={movies} />}
      </Container>
      <Next />
    </>
  );
}
