import { ImgStar } from "./styled";

export default function Stars({ id, checkerRatingSelected, src }) {
  const handleClick = () => {
    checkerRatingSelected(id);
  };

  return <ImgStar src={src} onClick={handleClick}></ImgStar>;
}
