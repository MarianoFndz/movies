//Components
import Search from "components/Search";
import Logo from "components/Logo";
//React Router
import { useHistory } from "react-router-dom";
//Styled Components
import { Container } from "./styles.js";

const Navbar = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <Logo handleClick={handleClick} />
      <Search />
    </Container>
  );
};

export default Navbar;
