import React from 'react';
import './SearchAndFilter.css';

class SearchAndFilter extends React.Component {
  render() {    
    return (
      <div className="search">
        <form className="search-books" onSubmit={e => this.props.handleSearch(e)} >
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