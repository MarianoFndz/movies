import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 30%;
  display: flex;
  justify-content: center;

  @media (max-width: 68.75rem) {
    flex: 0 0 20%;
    justify-content: flex-end;
  }

  @media screen and (max-width: 56.25rem) {
    flex: 0 0 auto;
  }
`;

export const Logotype = styled.p`
  font-size: 3rem;
  font-family: "Redressed", cursive;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;

  &:active,
  &:focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
  }
`;
