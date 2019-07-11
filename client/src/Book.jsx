import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 150px'
  height: auto;
`;

const Book = book => {
  return (
    <div className="container ml-2 mt-5">
      <div className="row">
        <div className="col-4">
          <Image src={book.image} />
        </div>
        <div className="col-6 text-left">
          <h3>{book.title}</h3>
          {book.author && <p> by {book.author.name}</p>}
          <p>Rating: {book.rating}</p>
          <p>{book.description}</p>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Book;
