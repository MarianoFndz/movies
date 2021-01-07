import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.primary};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  min-height: 9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 56.25rem) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media (max-width: 30rem) {
    padding: 1rem;
  }
`;

