import { Container, Content, InputText } from "./styles.js";
import Stars from "components/Stars";
import ButtonSearch from "components/ButtonSearch";

import { useState } from "react";

export default function Search() {
  const [rating, setRating] = useState(0);

  return (
    <Container>
      <InputText type="text" id="fname" name="fname" placeholder="Movie..." />
      <Stars setRating={setRating}></Stars>
      <ButtonSearch></ButtonSearch>
    </Container>
  );
}
