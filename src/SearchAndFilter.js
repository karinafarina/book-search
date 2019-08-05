import React from 'react';
import './SearchAndFilter.css';

function Search() {
  return (
    <div className="search">
      <form className="search-books">
        <label htmlFor="search-books ">Search:</label>
        <input 
          type="text"
          name="search-books"
          id="search-books"
          placeholder="henry"
          required/>

        <button type="submit">Search</button>
      </form>
      <form>
        <label htmlFor="print-type">Print 
        Type: </label>
        <select id="print-type" name="print-type">
          <option value="All">Select one...</option>
          Options
        </select>
      </form>
    </div>
  );
}

export default Search;