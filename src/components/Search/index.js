//React
import { useState } from "react";
//Components
import Button from "./Button";
import Input from "./InputText";
import Stars from "./Stars";
//Redux
import { searchMovie } from "redux/actions/moviesAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//Styled components
import { Container } from "./styles.js";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState({
    rating: 0,
    text: "",
  });

  const setSearchMovie = () => dispatch(searchMovie(search));

  const handleClick = () => {
    setSearchMovie();
    search.text ? history.push("/filter") : history.push("/");
  };

  return (
    <Container>
      <Input setSearch={setSearch} search={search} />
      <Stars setSearch={setSearch} search={search} />
      <Button handleClick={handleClick} />
    </Container>
  );
};

export default Search;
