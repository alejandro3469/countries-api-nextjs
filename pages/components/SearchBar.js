import React from "react";

export default function SearchBar() {
  return (
    <div className="searchbar-container">
      <div className="curve"></div>
      <span className="material-symbols-outlined icon2">search</span>
      <input
        type={"text"}
        placeholder={"Search by name"}
        className="search-input"
      ></input>
    </div>
  );
}
