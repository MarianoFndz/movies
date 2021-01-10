import styled, { css } from "styled-components";

export const Top = styled.div`
  padding: 1rem;
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
  @media (max-width: 50rem) {
    min-height: 60vh;
  }
  @media (max-width: 50rem) {
    grid-column: auto;
    grid-row: auto;
  }

  position: relative;

  &::after {
    content: "TOP";
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.secondary};

    display: flex;
    justify-content: center;
    align-items: center;

    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.primary};
    border: 0.5rem solid ${(props) => props.theme.secondary};

    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  &::before {
    content: "${(props) => props.rating}";
    font-size: 3rem;
    color: ${(props) => props.theme.secondary};

    display: flex;
    justify-content: center;
    align-items: center;

    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.primary};
    border: 0.5rem solid ${(props) => props.theme.secondary};

    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

export const MovieStyled = styled.div`
  padding: 1rem;
  position: relative;
  min-height: 20rem;
  @media (max-width: 50rem) {
    min-height: 65vh;
  }

  &::before {
    content: "${(props) => props.rating}";
    font-size: 2rem;
    color: ${(props) => props.theme.secondary};

    display: flex;
    justify-content: center;
    align-items: center;

    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.primary};
    border: 0.5rem solid ${(props) => props.theme.secondary};

    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  transition: all 0.3s;
  &:hover {
    filter: brightness(0.7);
  }

  ${(props) => props.addCSS}
`;

export const blur = css`
  filter: blur(10px);
`;
