import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;

export const ImgBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  z-index: 5;
  transition: all 0.3s;
  ${(props) => props.addCSS}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  max-width: 50rem;
  margin: auto;
  padding: 1rem;
  padding-top: 4rem;
  background-color: ${(props) => props.theme.primary};
  min-height: 60vh;
  z-index: 10;
`;

export const Title = styled.h1`
  padding-bottom: 5vh;
  text-align: center;
  text-transform: uppercase;
`;

export const ContainerImg = styled.div`
  width: 90%;
  min-height: 60vh;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: all 0.3s;
  ${(props) => props.addCSS}
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 2rem;
  font-size: 2.5rem;
`;

export const Item = styled.li`
  display: flex;
  padding: 1rem;
  align-items: center;
  color: ${(props) => props.theme.greyLight2};
`;

export const Icon = styled.span`
  display: inline-block;
  padding: 0.8rem;
  border: solid 0.5rem ${(props) => props.theme.secondary};
  border-radius: 50%;
  margin-left: 2rem;
  color: ${(props) => props.theme.secondary};
`;

export const Text = styled.p`
  font-size: 2rem;
`;

export const TextTitle = styled.span`
  font-size: 2.5rem;
`;

export const blur = css`
  filter: blur(5px);
`;
