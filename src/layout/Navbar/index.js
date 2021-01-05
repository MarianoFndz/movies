import { Container, Logo, LogoContainer } from "./styles.js";
import Search from "components/Search";
import logo from "assets/logo.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { popularMovies } from "redux/actions/moviesAction";

function Navbar() {
  const dispatch = useDispatch();

  const loadMovies = () => dispatch(popularMovies());
  useEffect(() => {
    console.log(loadMovies());
  }, []);

  return (
    <Container>
      <LogoContainer>
        <img src={logo}></img>
        <Logo>Movies</Logo>
      </LogoContainer>
      <Search></Search>
    </Container>
  );
}

export default Navbar;
