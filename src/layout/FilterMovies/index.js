//Components
import Spinner from "components/Spinner";
import Movie from "components/Movie";
//Hooks
import useMovies from "hooks/useMovies";
//Styled Components
import { Container, Title } from "./styles";

export default function Movies() {
  const { loading, movies } = useMovies();

  return (
    <Container>
      <Title>FILTER MOVIES</Title>
      {loading ? (
        <Spinner />
      ) : (
        movies.map((element, index) =>
          element.poster_path ? (
            index === 0 ? (
              <Movie key={element.id} top={true} data={element}></Movie>
            ) : (
              <Movie key={element.id} top={false} data={element}></Movie>
            )
          ) : null
        )
      )}
    </Container>
  );
}
