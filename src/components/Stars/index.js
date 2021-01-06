import { Container } from "./styles";
import Star from "components/Star";
import { useState, useEffect, useCallback } from "react";
import emptyStar from "assets/emptyStar.svg";
import fullStar from "assets/fullStar.svg";

export default function Stars({ setSearch, search }) {
  const stars = [2, 4, 6, 8, 10];
  const [ratingSelected, setRatingSelected] = useState(0);

  const checkerRatingSelected = useCallback(
    (id) => {
      ratingSelected === id ? setRatingSelected(0) : setRatingSelected(id);
    },
    [ratingSelected]
  );

  useEffect(() => {
    setSearch({ ...search, rating: ratingSelected });
  }, [ratingSelected]);

  return (
    <Container>
      {stars.map((element) => (
        <Star
          id={element}
          checkerRatingSelected={checkerRatingSelected}
          src={element <= ratingSelected ? fullStar : emptyStar}
          key={element}
        />
      ))}
    </Container>
  );
}
