import { useState } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthButtons from './auth/AuthButtons.jsx';
import Home from './components/Home.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// need to change these
import About from './components/About';

function App(props) {
 
  return (
    <>
      <h1>Listening Room</h1>
      <AuthButtons />
      <hr />
      {
        props.auth0.isAuthenticated &&
        <>
          {/* <button >What does this do??</button> */}
          
        </>
      }
      <Router>
        {/* <Header /> */}
        <Routes>
          {/* In order, home page with auth 0 login */}
          {/* <Route exact path="/home" element={<BestBooks />} /> */}
          {/* ChatGPT quiz for mood and music genres */}
          {/* <Route exact path="/quiz" element={<Quiz />} /> */}
          {/* Results of quiz with Spotify playlist */}
          <Route exact path="/listening" element={<Home />} />
          {/* Optional, about us page */}
          <Route exact path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}



export default withAuth0(App);
