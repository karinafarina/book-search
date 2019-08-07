import React from 'react';
import './Book.css';

function Book(props) {
  
  console.log(props.books);
  let books = props.books;
  return (
    books.map(book => (
      <div className="book">
        <div className="book-cover">
          <img src={book.volumeInfo.thumnail} alt="Cover" />
        </div>
        <div className="book-summary">
          <div className="book-title">{book.volumeInfo.title}</div>
          <div className="book-info">
            <div className="book-author">
              {book.volumeInfo.authors ? `Author:${book.volumeInfo.authors[0]}` : ''}
            </div>
            <div className="description">
              {book.volumeInfo.description}
            </div>
          </div>
        </div>
      </div>
    ))
    
  );
}

export default Book;