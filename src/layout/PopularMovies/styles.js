import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
`;

export const Content = styled.div`
  padding: 6rem;
  background-color: ${(props) => props.theme.primary};
  min-height: 100vh;
  max-width: 120rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: min-content;
  @media (max-width: 50rem) {
    grid-template-columns: 100%;
    padding: 1rem;
    min-height: 200vh;
  }
`;

export const Title = styled.h1`
  padding-bottom: 5vh;
  text-align: center;
  color: ${(props) => props.theme.secondary};

  grid-column: 1 / -1;
  grid-row: 1 / 2;
`;
