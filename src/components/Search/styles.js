import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 4rem;

  @media (max-width: 81.25rem) {
    flex: 0 0 60%;
  }

  @media (max-width: 68.75rem) {
    flex: 0 0 80%;
  }

  @media only screen and (max-width: 56.25rem) {
    flex: 0 0 auto;
    width: 100%;
  }

  @media screen and (max-width: 43.75rem) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
