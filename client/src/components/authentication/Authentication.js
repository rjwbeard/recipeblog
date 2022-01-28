import { useAuth0 } from "@auth0/auth0-react";

import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

const Authentication = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return <span>{isAuthenticated ? <LogOutButton /> : <LogInButton />}</span>;
};

export default Authentication;
