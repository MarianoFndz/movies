import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.primary};
  border-radius: 5px;
  min-height: 9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 56.25rem) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media (max-width: 25rem) {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 56.25rem) {
    flex: 0 0 auto;
  }
`;

export const Logo = styled.p`
  font-size: 3rem;
  font-family: "Redressed", cursive;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
`;
