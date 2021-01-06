import next from "assets/next.svg";

//Styled Components
import { Container, LeftArrow, RightArrow, Img } from "./styles";

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
