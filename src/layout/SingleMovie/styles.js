import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  background-image: url(${(props) => props.img});
  background-size: cover;
  padding: 1.5rem;
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
  padding-top: 2rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
`;

export const Title = styled.h1`
  padding-bottom: 5vh;
  text-align: center;
  text-transform: uppercase;
`;

export const Img = styled.img`
  width: 90%;
  object-fit: cover;
  border-radius: 5px;
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
`;

export const Icon = styled.span`
  display: inline-block;
  padding: 0.8rem;
  border: solid 0.5rem ${(props) => props.theme.secondary};
  border-radius: 50%;
  margin-left: 2rem;
`;

export const Text = styled.p`
  font-size: 2rem;
`;

export const ItemTitle = styled.span`
  font-size: 2.5rem;
`;
