import React from 'react';
import './BookList.css';
import Book from './Book';

function BookList(props) {
  const book = props.data;
  console.log('data book:', book);
  return (
    <div className="book-list">
      
      <Book />
    </div>
  );
}

export default BookList;