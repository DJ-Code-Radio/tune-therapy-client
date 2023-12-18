import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AuthButtons from './auth/AuthButtons.jsx';


import { useState } from 'react';
let SERVER = import.meta.env.VITE_SERVER;

function App(props) {
 
  return (
    <>
      <h1>Our App</h1>
      <AuthButtons />
      <hr />
      {
        props.auth0.isAuthenticated &&
        <>
          <button >Button here</button>
          
        </>
      }
    </>
  )
}



export default withAuth0(App);
