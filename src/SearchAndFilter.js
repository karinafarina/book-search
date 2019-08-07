import React from 'react';
import './SearchAndFilter.css';

class SearchAndFilter extends React.Component {
  state = {
    error: ""
  }
  handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = document.getElementById('search-books').value;
    console.log(searchTerm);
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm;
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(results => {
        console.log('results are: ', results);
        if (!results.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return results;
      })
      .then(results => results.json())
      .then(data => {
        console.log('results are:', data);
        this.props.handleBookData(data);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err.message
        });
      });
  }

  
  render() {    
    return (
      <div className="search">
        <form className="search-books" onSubmit={e => this.handleSearch(e)} >
          <label htmlFor="search-books">Search:</label>
          <input
            type="text"
            name="search-books"
            id="search-books"
            placeholder="henry"
            required />
          
          <button type="submit">Search</button>
        </form>
        {/* <form type="filter" >
          <label htmlFor="print-type">Print
        Type: </label>
          <select 
            value={this.state.printType}
            onChange={this.props.handleChange}
            id="print-type" 
            name="print-type">
              <option value="All">All</option>
              <option value="Books">Books</option>
              <option value="Magazines">Magazines</option>
          </select>
        </form> */}
      </div>
    );
  }
  
}

export default SearchAndFilter;