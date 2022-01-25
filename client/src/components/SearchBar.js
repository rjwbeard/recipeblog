import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="search-bar">
      <form method="get" action="/" type="text" className="form">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search all Recipes</span>
        </label>
        <input
          className="search-bar-input"
          autoComplete="off"
          type="text"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          id="header-search"
          name="s"
          placeholder="Search all Recipes"
        />
      </form>
    </div>
  );
};

export default SearchBar;
