import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/Auth.css';

function LogoutButton() {

  const {
    isAuthenticated,
    logout
  } = useAuth0();

  function handleLogout() {
    logout({ returnTo: window.location.origin });
  }

  return isAuthenticated &&
      <button className="logout-button" onClick={handleLogout}>Log out</button>
    ;
}

export default LogoutButton;