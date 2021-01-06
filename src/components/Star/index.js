import { ImgStar } from "./styled";
import { useEffect, memo } from "react";

const Star = memo(({ id, checkerRatingSelected, src }) => {
  useEffect(() => {
    console.log("Star render");
  });

  const handleClick = () => {
    checkerRatingSelected(id);
  };

  return <ImgStar src={src} onClick={handleClick}></ImgStar>;
});

export default Star;
