import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import { LoginButton, LogoutButton } from "./LogInAndOut";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="header-title">Cookie Worldwide</h1>
      </Link>
      <SearchBar />
      <div className="header-links">
        <LoginButton />
        <LogoutButton />
        <Link to="/aboutme">
          <h5 className="aboutme-link">About Me</h5>
        </Link>
      </div>
    </div>
  );
};

export default Header;
