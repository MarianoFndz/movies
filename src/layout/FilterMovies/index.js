//React
import { useEffect } from "react";
//Components
import Movies from "components/Movies";
//Hooks
import useMovies from "hooks/useMovies";
import useNearScreen from "hooks/useNearScreen";
//Styled Components
import { Container, Title } from "./styles";

const FilterMovies = () => {
  const { setPage } = useMovies();
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  useEffect(() => {
    isNearScreen && setPage((prevPage) => prevPage + 1);
  }, [isNearScreen]);

  return (
    <>
      <Container>
        <Title>FILTER MOVIES</Title>
        <Movies />
      </Container>
      <div ref={fromRef}></div>
    </>
  );
};

export default FilterMovies;
