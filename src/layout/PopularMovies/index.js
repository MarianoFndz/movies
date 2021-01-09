//React
import { useEffect } from "react";
//Components
import Movies from "components/Movies";
//Styled Components
import { Container, Title } from "./styles";
//Custom hooks
import useMovies from "hooks/useMovies";
import useNearScreen from "hooks/useNearScreen";

import { useDispatch } from "react-redux";
import { popularMovies } from "redux/actions/moviesAction";

const PopularMovies = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });
  const dispatch = useDispatch();

  const { setPage } = useMovies((data) => dispatch(popularMovies(data)));

  useEffect(() => {
    isNearScreen && setPage((prevPage) => prevPage + 1);
  }, [isNearScreen]);

  return (
    <>
      <Container>
        <Title>POPULAR MOVIES</Title>
        <Movies />
      </Container>
      <div ref={fromRef}></div>
    </>
  );
};

export default PopularMovies;
