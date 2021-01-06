//Styled Components
import { Container, Title } from "./styles";
import Movie from "components/Movie";
import useMovies from "hooks/useMovies";
import Spinner from "components/Spinner";

export default function Movies() {
  const { loading, movies } = useMovies();

  return (
    <Container>
      <Title>POPULAR MOVIES</Title>
      {loading ? (
        <Spinner />
      ) : (
        movies.map((element, index) =>
          index === 0 ? (
            <Movie key={element.id} top={true} data={element}></Movie>
          ) : (
            <Movie key={element.id} top={false} data={element}></Movie>
          )
        )
      )}
    </Container>
  );
}
