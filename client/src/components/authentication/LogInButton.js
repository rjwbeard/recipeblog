import { useAuth0 } from "@auth0/auth0-react";

const LogInButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <button
      className="Authentication_buttons"
      onClick={(e) => {
        console.log(e);
        loginWithPopup();
      }}
    >
      Log In
    </button>
  );
};

export default LogInButton;
