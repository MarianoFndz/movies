//Styled Components
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
//Utilities
import imgApi from "utilities/ImgAPI";
//Custom hooks
import useSingleMovie from "hooks/useSingleMovie";

export default function SingleMovie({ match }) {
  const { params } = match;
  const { movie, loading } = useSingleMovie(params.id);
  const {
    poster_path,
    backdrop_path,
    vote_average,
    popularity,
    overview,
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
          <Item>Popularity: {popularity}</Item>
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
