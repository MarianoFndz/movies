//React
import { memo, useEffect } from "react";
//Styled components
import { Top, MovieStyled, Img } from "./styles";
//React router
import { useHistory } from "react-router-dom";
//Assets
import imgApi from "utilities/ImgAPI";

const Movie = ({ id, top, data = {} }) => {
  const { poster_path, vote_average } = data;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/movie/${id}`);
  };

  useEffect(() => {
    console.log("Movie", id);
  });

  return top ? (
    <Top rating={vote_average} onClick={handleClick}>
      <Img src={imgApi + poster_path} alt=""></Img>
    </Top>
  ) : (
    <MovieStyled rating={vote_average} onClick={handleClick}>
      <Img src={imgApi + poster_path} alt=""></Img>
    </MovieStyled>
  );
};

export default memo(Movie, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
