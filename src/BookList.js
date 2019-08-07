import React from 'react';
import './BookList.css';
import Book from './Book';

function BookList(props) {
  const books = props.books;
  console.log('data book:', books);
  return (
    <div className="book-list">
      <Book books={books}/>
    </div>
  );
}

export default BookList;