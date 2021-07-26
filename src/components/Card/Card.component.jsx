import React from 'react';
import { CardContainer, CardParagraph, CardTitle, CardImage } from './Card.element';

function Card({ title, content, image }) {
  return (
    <CardContainer>
      <CardImage src={image.url} alt="" />
      <CardTitle>
        <h2>{title}</h2>
      </CardTitle>
      <CardParagraph>{content}</CardParagraph>
    </CardContainer>
  );
}

export default Card;
