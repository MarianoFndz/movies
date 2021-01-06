import img from "./prueba.jpg";
import {
  Container,
  Content,
  Title,
  Img,
  List,
  Icon,
  Item,
  Text,
  ItemTitle,
} from "./styles";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentMovie } from "redux/actions/moviesAction";

import imgApi from "utilities/ImgAPI";

export default function SingleMovie({ match }) {
  const { params } = match;
  const dispatch = useDispatch();
  const loadCurrentMovie = () => {
    dispatch(currentMovie(params.id));
  };

  useEffect(() => {
    console.log("SingleMovie");
    loadCurrentMovie();
  }, []);

  const movie = useSelector((state) => state.movies.currentMovie);
  const loading = useSelector((state) => state.movies.loading);

  const {
    poster_path,
    backdrop_path,
    vote_average,
    overview,
    original_title,
    title,
  } = movie;

  return !loading ? (
    <Container img={imgApi + backdrop_path}>
      <Content>
        <Title>{title}</Title>
        <Img src={imgApi + poster_path}></Img>
        <List>
          <Item>
            Rating: <Icon>{vote_average}</Icon>
          </Item>
          <Item>
            <Text>
              <ItemTitle>Overview:</ItemTitle> {overview}
            </Text>
          </Item>
        </List>
      </Content>
    </Container>
  ) : null;
}
