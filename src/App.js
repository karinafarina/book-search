import React from 'react';
import './App.css';
import Title from './Title';
import SearchAndFilter from './SearchAndFilter';
import BookList from './BookList';

function App() {
  return (
    <div className="app">
      <Title />
      <SearchAndFilter />
      <BookList />
    </div>
  );
}

export default App;