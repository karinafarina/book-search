import React from 'react';
import './SearchAndFilter.css';

class SearchAndFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: 'All'
    };
  }

  handleChange = (event) => {
    this.setState({ printType: event.target.value })
  }

  render() {    
    const { handleSearch } = this.props;
    return (
      <div className="search">
        <form className="search-books" onSubmit={handleSearch} >
          <label htmlFor="search-books">Search:</label>
          <input
            type="text"
            name="search-books"
            id="search-books"
            placeholder="henry"
            required />
          
          <button type="submit">Search</button>
        </form>
        <form type="filter" >
          <label htmlFor="print-type">Print
        Type: </label>
          <select 
            value={this.state.printType}
            onChange={this.handleChange}
            id="print-type" 
            name="print-type">
              <option value="All">All</option>
              <option value="Books">Books</option>
              <option value="Magazines">Magazines</option>
          </select>
        </form>
      </div>
    );
  }
  
}

export default SearchAndFilter;