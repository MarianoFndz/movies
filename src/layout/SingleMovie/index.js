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
  TextTitle,
} from "./styles";
//Utilities
import imgApi from "utilities/ImgAPI";
//Custom hooks
import useSingleMovie from "hooks/useSingleMovie";
//Components
import Spinner from "components/Spinner";

const SingleMovie = ({ match }) => {
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

  return (
    <Container img={imgApi + backdrop_path}>
      <Content>
        {!loading ? (
          <>
            <Title>{title}</Title>
            <Img src={imgApi + poster_path} />
            <List>
              <Item>
                Rating: <Icon>{vote_average}</Icon>
              </Item>
              <Item>Popularity: {popularity}</Item>
              <Item>
                <Text>
                  <TextTitle>Overview:</TextTitle> {overview}
                </Text>
              </Item>
            </List>
          </>
        ) : (
          <Spinner />
        )}
      </Content>
    </Container>
  );
};

export default SingleMovie;
