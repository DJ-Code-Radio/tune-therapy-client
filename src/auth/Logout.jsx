import { useAuth0} from '@auth0/auth0-react';
import '../css/Auth.css'

function LogoutButton() {

  const {
    isAuthenticated,
    logout
  } = useAuth0();

  function handleLogout() {
    logout({ returnTo: window.location.origin });
  }

  return isAuthenticated && (
    <div className="button-container">
      <button
        className="auth-button"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}

export default LogoutButton;