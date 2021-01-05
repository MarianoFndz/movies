import { Container } from "./styles";
import Star from "components/Star";
import { useState } from "react";
import emptyStar from "assets/emptyStar.svg";
import fullStar from "assets/fullStar.svg";

export default function Stars({ setRating }) {
  const stars = [2, 4, 6, 8, 10];
  const [ratingSelected, setRatingSelected] = useState(0);
  console.log(ratingSelected);

  const checkerRatingSelected = (id) => {
    ratingSelected === id ? setRatingSelected(0) : setRatingSelected(id);
  };

  return (
    <Container>
      {stars.map((element) => (
        <Star
          id={element}
          checkerRatingSelected={checkerRatingSelected}
          src={element <= ratingSelected ? fullStar : emptyStar}
        />
      ))}
    </Container>
  );
}
