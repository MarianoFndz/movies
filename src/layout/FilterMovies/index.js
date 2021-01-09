//React
import { useEffect } from "react";
//Components
import Movies from "components/Movies";
//Hooks
import useMovies from "hooks/useMovies";
import useNearScreen from "hooks/useNearScreen";
//Styled Components
import { Container, Title } from "./styles";
//Redux
import { useDispatch } from "react-redux";
import { filterMovies } from "redux/actions/moviesAction";

const FilterMovies = () => {
  const dispatch = useDispatch();
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  const { setPage, search } = useMovies((data) => {
    dispatch(filterMovies(data));
  });

  useEffect(() => {
    isNearScreen && search.text && setPage((prevPage) => prevPage + 1);
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
