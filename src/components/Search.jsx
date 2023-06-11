import React, { Fragment, useState } from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  };

  return (
    <Fragment>
      <div className="search-wrapper">
        <h1 className="search">Search City</h1>
        <form onSubmit={submitHandler}>
          <input
            value={search}
            type="text"
            className="input"
            placeholder="Enter City"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>Search</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Search;
