//Styled Components
import { Container, LeftArrow, RightArrow, Img } from "./styles";
//Assets
import next from "assets/next.svg";

const Next = ({ handleNextPage, handlePrevPage }) => (
  <Container>
    <LeftArrow onClick={handlePrevPage}>
      <Img src={next}></Img>
    </LeftArrow>
    <RightArrow onClick={handleNextPage}>
      <Img src={next}></Img>
    </RightArrow>
  </Container>
);

export default Next;
