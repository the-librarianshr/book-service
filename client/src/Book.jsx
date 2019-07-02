import React from 'react';

const Book = (book, { randomize }) => {
  return (
    <div className="ml-2 mt-5">
      <div className="row">
        <div className="col-2">
          <img src={book.image} />
        </div>
        <div className="col-8">
          <h3>{book.title}</h3>
          {book.author && <p> by {book.author.name}</p>}
          <p>Rating: {book.rating}</p>
          <p>{book.description}</p>
        </div>
      </div>
      <div>
        <button
          type="submit"
          onClick={() => {
            randomize();
          }}
        >
          Random Book
        </button>
      </div>
    </div>
  );
};

export default Book;
