import { Top, MovieStyled, Img } from "./styles";
import { useEffect, memo } from "react";

import imgApi from "utilities/ImgAPI";
import { useHistory } from "react-router-dom";

const Movie = ({ top, data }) => {
  const { id, poster_path, vote_average } = data;

  useEffect(() => {
    console.log("Movie", id);
  });

  const history = useHistory();

  const handleClick = () => {
    history.push(`/${id}`);
  };

  return top ? (
    <Top rating={vote_average} onClick={handleClick}>
      <Img src={imgApi + poster_path}></Img>
    </Top>
  ) : (
    <MovieStyled rating={vote_average} onClick={handleClick}>
      <Img src={imgApi + poster_path}></Img>
    </MovieStyled>
  );
};

export default Movie;
