import { Container } from "./styles.js";
import Stars from "components/Stars";
import ButtonSearch from "components/ButtonSearch";
import InputTextSearch from "components/InputTextSearch";

import { searchMovie } from "redux/actions/moviesAction";
import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

export default function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState({
    rating: 0,
    text: "",
  });
  const setSearchMovie = () => dispatch(searchMovie(search));

  const handleClick = () => {
    setSearchMovie();
    search.text ? history.push("filter") : history.push("/");
  };

  return (
    <Container>
      <InputTextSearch setSearch={setSearch} search={search}></InputTextSearch>
      <Stars setSearch={setSearch} search={search}></Stars>
      <ButtonSearch handleClick={handleClick}></ButtonSearch>
    </Container>
  );
}
