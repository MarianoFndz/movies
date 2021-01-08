//React
import { useState, useEffect, useCallback } from "react";
//Styled components
import { Container } from "./styles";
//Components
import Star from "./Star";
//Assets
import emptyStar from "assets/emptyStar.svg";
import fullStar from "assets/fullStar.svg";

const Stars = ({ setSearch, search }) => {
  const stars = [2, 4, 6, 8, 10];
  const [ratingSelected, setRatingSelected] = useState(0);

  const checkerRatingSelected = (id) => {
    ratingSelected === id ? setRatingSelected(0) : setRatingSelected(id);
  };

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
};

export default Stars;
