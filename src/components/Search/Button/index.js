//Assets
import iconSearch from "assets/search.svg";
//Styled components
import { Container } from "./styles";

const Button = ({ handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <img src={iconSearch}></img>
    </Container>
  );
};

export default Button;
