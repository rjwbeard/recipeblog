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
      </div>
    </div>
  );
};

export default Header;
