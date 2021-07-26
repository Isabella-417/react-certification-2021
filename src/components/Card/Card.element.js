import styled from 'styled-components';

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 25em;
  margin: 1em;
  padding: 1.5em;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 12rem;
  background-image: url(${(props) => props.src});
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10%;
  opacity: 0.5;
`;

export const CardTitle = styled.figcaption`
  font-weight: bold;
`;

export const CardParagraph = styled.p`
  width: auto;
  text-align: justify;
`;
