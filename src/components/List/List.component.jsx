import React from 'react';
import { ListContainer } from './List.element';

function List(props) {
  const { children, Component } = props;

  return (
    <ListContainer>
      {children.map((child) => {
        return (
          <Component
            key={child.id.videoId}
            title={child.snippet.title}
            content={child.snippet.description}
            image={child.snippet.thumbnails.high}
          />
        );
      })}
    </ListContainer>
  );
}

export default List;
