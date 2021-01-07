//Styled Components
import { Container, Logotype } from "./styles";
//Assets
import logo from "assets/logo.svg";

const Logo = ({ handleClick }) => (
  <Container>
    <img src={logo} alt=""></img>
    <Logotype onClick={handleClick}>Movies</Logotype>
  </Container>
);

export default Logo;
