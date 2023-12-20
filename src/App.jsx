import { useState, useEffect } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthButtons from './auth/AuthButtons.jsx';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import ListeningRoom from './components/ListeningRoom.jsx';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// need to change these
import About from './components/About';

function App(props) {
  const [token, setToken] = useState('')
  const [user, setUser] = useState({})

  useEffect(()=>{
    async function getToken(){
      let claim = await props.auth0.getIdTokenClaims();
      setToken(claim.__raw);
      setUser(props.auth0.user)
    }
    getToken();

  }, [props.auth0.isAuthenticated])
  
  return (
    <>
      <AuthButtons />
      <Router>
        {/* <Header /> */}
        <Routes>
          {/* In order, home page with auth 0 login */}
          <Route exact path="/ListeningRoom" element={<ListeningRoom />} />
          {/* ChatGPT quiz for mood and music genres */}
          <Route exact path="/quiz" element={<Quiz token = {token} user={user}/>} />

          {/* Results of quiz with Spotify playlist */}
          <Route exact path="/" element={<Home />} />
          {/* Optional, about us page */}
          <Route exact path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}



export default withAuth0(App);
