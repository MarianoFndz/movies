import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  background-color: inherit;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 50%;
  margin-left: 0.5rem;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }

  &:active {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
    transform: scale(1);
    box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.6);
  }
`;
