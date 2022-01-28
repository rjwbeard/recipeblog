import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="login-out-buttons"
      onClick={() => {
        logout();
      }}
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
