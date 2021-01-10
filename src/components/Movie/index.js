//React
import { memo, useState } from "react";
//Styled components
import { Top, MovieStyled, Img, blur } from "./styles";
//React router
import { useHistory } from "react-router-dom";
//Assets
import imgApi from "utilities/ImgAPI";
//Components
import Spinner from "components/Spinner";

const Movie = ({ id, top, data }) => {
  const { poster_path, vote_average } = data;
  const [imageStatus, setImageStatus] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/movie/${id}`);
  };

  const handleOnLoad = () => {
    setImageStatus(true);
  };

  return top ? (
    <Top rating={vote_average} onClick={handleClick}>
      <Img
        src={imgApi + poster_path}
        alt=""
        onLoad={handleOnLoad}
        addCSS={imageStatus || blur}
      ></Img>
      {imageStatus || <Spinner />}
    </Top>
  ) : (
    <MovieStyled rating={vote_average} onClick={handleClick}>
      <Img
        src={imgApi + poster_path}
        alt=""
        onLoad={handleOnLoad}
        addCSS={imageStatus || blur}
      ></Img>
      {imageStatus || <Spinner />}
    </MovieStyled>
  );
};

export default memo(Movie, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id && prevProps.index === nextProps.index;
});
