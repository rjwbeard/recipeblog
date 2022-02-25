import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import Authentication from "./authentication/Authentication";

const Header = () => {
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
