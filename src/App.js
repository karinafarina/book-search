import React from 'react';
import './App.css';
import Title from './Title';
import SearchAndFilter from './SearchAndFilter';
import BookList from './BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  setBooks = books => {
    this.setState({
      books
    })
    console.log(books);
  }

handleSearch = e => {
  e.preventDefault();

  const searchTerm = document.getElementById('search-books').value;
  const url = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm;
  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  };

  fetch(url, options)
    .then(results => {
      if (!results.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return results;
    })
    .then(results => results.json())
    .then(data => {
      this.setBooks(data.items);
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Title />
        <SearchAndFilter handleSearch={this.handleSearch}/>
        <BookList books={books}/>
      </div>
    );
  };
}



export default App;