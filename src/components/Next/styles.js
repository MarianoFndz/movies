import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  padding: 2rem;
`;

export const RightArrow = styled.div`
  height: 100%;
  padding-left: 2rem;
`;

export const LeftArrow = styled.div`
  height: 100%;
  transform: rotate(180deg);
  padding-left: 2rem;
  cursor: pointer;
  &:active {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export const Img = styled.img`
  height: 100%;
`;
