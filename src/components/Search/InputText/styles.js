import styled from "styled-components";

export const Input = styled.input`
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

  @media screen and (max-width: 30rem) {
    width: 70%;
    &:focus {
      outline: none;
      width: 90%;
    }
  }
`;
