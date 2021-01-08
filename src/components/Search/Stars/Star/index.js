//React
import { memo } from "react";
//Styled components
import { ImgStar } from "./styled";

const Star = ({ id, checkerRatingSelected, src }) => {
  const handleClick = () => {
    checkerRatingSelected(id);
  };

  return <ImgStar src={src} onClick={handleClick}></ImgStar>;
};

export default memo(Star, (prevProps, NextProps) => {
  return prevProps.src === NextProps.src;
});
