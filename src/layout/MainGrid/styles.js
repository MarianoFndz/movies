import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 20vh min-content;

  @media screen and (max-width: 56.25rem) {
    grid-template-rows: 15vh min-content;
  }
  @media screen and (max-width: 25rem) {
    grid-template-rows: min-content min-content;
  }
`;
