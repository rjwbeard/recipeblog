import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        className="login-out-buttons"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Log In to Comment
      </button>
    )
  );
};

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="login-out-buttons"
        onClick={() => {
          logout();
        }}
      >
        Log Out
      </button>
    )
  );
};
