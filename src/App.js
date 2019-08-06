import React from 'react';
import './App.css';
import Title from './Title';
import SearchAndFilter from './SearchAndFilter';
// import BookList from './BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      // printType: 'All'
    };
  }
  // handleChange = (event) => {
  //   this.setState({ printType: event.target.value })
  // }

  handleSearch = (e) => {
    e.preventDefault();
    
    console.log(`Search called ${e}`);
    
  }

  componentDidMount() {
    const url =`https://www.googleapis.com/books/v1/volumes?q=henry`;
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "BearerAIzaSyBh6F-ZE_Y49xI4HZ6D4KYw0ZkIWaioN24",
        "Content Type": "application/json"
      }
    };

    fetch(url, options)
      .then(results => {
        if(!results.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return results;
      })
      .then(results => results.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div className="app">
        <Title />
        <SearchAndFilter 
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}/>
        {/* <BookList /> */}
      </div>
    );
  }
  
}

export default App;