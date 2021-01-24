//React
import { memo, useState, useEffect } from "react";
//Styled components
import { Top, MovieStyled, Img, blur } from "./styles";
//React router
import { useHistory } from "react-router-dom";
//Assets
import { URL_IMG_API_500 as imgApi } from "utilities/ImgAPI";
//Components
import Spinner from "components/Spinner";

const Movie = ({ id, top, data }) => {
  const { poster_path, vote_average } = data;
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log(isImageLoaded);
  });

  //Functions
  const renderSpinnerWhileLoading = () => {
    return isImageLoaded ? null : <Spinner />;
  };

  const applyBlurWhileLoading = () => {
    return isImageLoaded ? null : blur;
  };

  const redirectToPageOfMovie = () => {
    history.push(`/movie/${id}`);
  };

  //Handlers
  const handleClick = () => {
    redirectToPageOfMovie();
  };

  const handleOnLoad = () => {
    setIsImageLoaded(true);
  };

  //

  return top ? (
    <Top rating={vote_average} onClick={handleClick}>
      <Img
        src={imgApi + poster_path}
        alt=""
        onLoad={handleOnLoad}
        addCSS={applyBlurWhileLoading()}
      ></Img>
      {renderSpinnerWhileLoading()}
    </Top>
  ) : (
    <MovieStyled rating={vote_average} onClick={handleClick}>
      <Img
        src={imgApi + poster_path}
        alt=""
        onLoad={handleOnLoad}
        addCSS={applyBlurWhileLoading()}
      ></Img>
      {renderSpinnerWhileLoading()}
    </MovieStyled>
  );
};

export default memo(Movie, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id && prevProps.index === nextProps.index;
});
