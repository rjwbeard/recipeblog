import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import SearchBar from "./SearchBar";
import Authentication from "./authentication/Authentication";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="header-title">Cookie Worldwide</h1>
      </Link>
      <SearchBar />
      <div className="header-links">
        <Authentication />
        <Link to="/aboutme">
          <h5 className="aboutme-link">About Me</h5>
        </Link>
        {isAuthenticated ? (
          <Link to="/recipes/favorites/:id">
            <h5 className="aboutme-link">Favorites</h5>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
