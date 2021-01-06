import { Container, Logo, LogoContainer } from "./styles.js";
import Search from "components/Search";
import logo from "assets/logo.svg";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <LogoContainer>
        <img src={logo}></img>
        <Logo onClick={handleClick}>Movies</Logo>
      </LogoContainer>
      <Search></Search>
    </Container>
  );
}

export default Navbar;
