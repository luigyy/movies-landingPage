import React from "react";
import "../index.css";

const Header = ({ searchValue, onSearchChange, searchMovies }) => {
  return (
    <div className="search">
      <h1>MoviesLand</h1>
      <div>
        <input
          onChange={(e) => onSearchChange(e.target.value)}
          type="text"
          value={searchValue}
          placeholder="Search for movies"
        />
      </div>
      <img
        src=""
        alt="search"
        onClick={() => {
          searchMovies(searchValue);
        }}
      />
    </div>
  );
};

export default Header;
