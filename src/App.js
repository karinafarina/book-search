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

  handleBookData(data) {
    this.setState({
      books: data
    })
  }
  // handleChange = (event) => {
  //   this.setState({ printType: event.target.value })
  // }

  render() {
    return (
      <div className="app">
        <Title />
        <SearchAndFilter 
          handleBookData={this.handleBookData}
          handleChange={this.handleChange}/>
        {/* <BookList /> */}
      </div>
    );
  }
  
}

export default App;