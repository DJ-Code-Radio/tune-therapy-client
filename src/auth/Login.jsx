import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/Auth.css';

function Login() {

  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  return ! isAuthenticated &&
    <button className="login-button" onClick={handleLogin}>Log in</button>
  ;
}
export default Login;