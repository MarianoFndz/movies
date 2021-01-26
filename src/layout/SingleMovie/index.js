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
  blur,
  ImgBackground,
  ContainerImg,
} from "./styles";
//Utilities
import { URL_IMG_API_1280 as imgApi } from "utilities/ImgAPI";
//Custom hooks
import useSingleMovie from "hooks/useSingleMovie";
//Components
import Spinner from "components/Spinner";
//React
import { useState } from "react";

const SingleMovie = ({ match }) => {
  const { params } = match;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const { movie } = useSingleMovie(params.id);
  const {
    poster_path,
    backdrop_path,
    vote_average,
    popularity,
    overview,
    title,
  } = movie;

  //Functions
  const applyBlurWhileLoading = () => {
    return isImageLoaded ? null : blur;
  };

  const renderSpinnerWhileLoading = () => {
    return isImageLoaded ? null : <Spinner />;
  };

  //Handlers
  const handleOnLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Container>
      <ImgBackground
        img={imgApi + backdrop_path}
        addCSS={applyBlurWhileLoading()}
        onLoad={handleOnLoad}
      />

      <Content>
        <Title>{title}</Title>
        <ContainerImg>
          <Img
            src={imgApi + poster_path}
            addCSS={applyBlurWhileLoading()}
            onLoad={handleOnLoad}
          />
          {renderSpinnerWhileLoading()}
        </ContainerImg>

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
      </Content>
    </Container>
  );
};

export default SingleMovie;
