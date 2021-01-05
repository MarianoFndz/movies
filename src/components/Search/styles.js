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

  @media only screen and (max-width: 56.25rem) {
    flex: 0 0 auto;
    width: 100%;
  }

  @media screen and (max-width: 25rem) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const InputText = styled.input`
  width: 40%;
  background-color: ${(props) => props.theme.greyLight1};
  padding: 0.7rem 2rem;
  border: none;
  border-radius: 6rem;
  transition: all 0.2s;
  font-size: 1.6rem;
  font-weight: 100;
  &:focus {
    outline: none;
    width: 45%;
  }
  &::placeholder {
    color: ${(props) => props.theme.greyLight2};
  }

  @media screen and (max-width: 25rem) {
    width: 70%;
    &:focus {
      outline: none;
      width: 90%;
    }
  }
`;
