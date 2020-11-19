import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    const {
      stocked,
      searchValue,
      handleChangeCheckbox,
      handleSearch,
    } = this.props;
    return (
      <div>
        <p>Search</p>
        <input
          className="input-text"
          type="text"
          name="name"
          value={searchValue}
          onChange={handleSearch}
        />
        <div>
          <input
            type="checkbox"
            name="stocked"
            id="stocked"
            checked={stocked}
            onChange={handleChangeCheckbox}
          />
          <label htmlFor="stocked">Only Show Products on Stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
