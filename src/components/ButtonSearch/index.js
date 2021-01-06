import iconSearch from "assets/search.svg";
import { Container } from "./styles";

export default function ButtonSearch({ handleClick }) {
  return (
    <Container onClick={handleClick}>
      <img src={iconSearch}></img>
    </Container>
  );
}
