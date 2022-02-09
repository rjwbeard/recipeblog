import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="SearchBar">
      <form method="get" action="/" type="text" className="form">
        <label htmlFor="SearchBar_label">
          <span className="visually-hidden">Search all Recipes</span>
        </label>
        <input
          className="SearchBar_input"
          autoComplete="off"
          type="text"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          id="SearchBar_label"
          name="s"
          placeholder="Search all Recipes"
        />
      </form>
    </div>
  );
};

export default SearchBar;
