import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  from {
    transform: translateX(50%) rotate(0deg) ;
  }

  to {
    transform: translateX(50%)  rotate(360deg) ;
  }
`;
export const Container = styled.div`
  border: 4px solid ${(props) => props.theme.secondary};
  opacity: 0.4;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  border-left-color: transparent;
  transform: translateX(50%) rotate(0deg);
  animation: ${spin} 1s linear infinite;

  position: absolute;
  top: 50%;
  right: 50%;
`;
