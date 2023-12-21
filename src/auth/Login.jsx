import { useAuth0 } from '@auth0/auth0-react';
import '../css/Auth.css'

function Login() {
  const {
    isAuthenticated,
    loginWithRedirect,

  } = useAuth0();



  function handleLogin() {
    loginWithRedirect();
  }

  return !isAuthenticated && (
    <div className="button-container">
      <button
        className="auth-button"
        onClick={handleLogin}
      >
        Log in
      </button>
    </div>
  );
}

export default Login;

