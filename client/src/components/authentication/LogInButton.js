import { useAuth0 } from "@auth0/auth0-react";

const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="Authentication_buttons"
      onClick={(e) => {
        loginWithRedirect();
      }}
    >
      Log In
    </button>
  );
};

export default LogInButton;
