import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import SearchBar from "./SearchBar";
import Authentication from "./authentication/Authentication";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header_title">Cookie Worldwide</h1>
      </Link>
      <SearchBar />
      <div className="Header_links">
        <Authentication />
        <Link to="/aboutme">
          <h5 className="Header_link">About Me</h5>
        </Link>
        {isAuthenticated ? (
          <Link to="/recipes/favorites/:id">
            <h5 className="Header_link">Favorites</h5>
          </Link>
        ) : null}
      </div>
      <div className="Header_RecipeForm_link visually-hidden">
        <Link to="/recipes/add">
          <h5 className="Header_link">New Recipe</h5>
        </Link>
      </div>
    </div>
  );
};

export default Header;
