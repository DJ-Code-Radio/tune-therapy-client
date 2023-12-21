
import { useState, useEffect } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthButtons from './auth/AuthButtons.jsx';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import MovieRoom from './components/MovieRoom.jsx';
import About from './components/About';
// import AppRouter from './components/AppRouter'; // Import the AppRouter component
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const [token, setToken] = useState('')
  const [user, setUser] = useState({})
  const [imageUrl, setImageUrl] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  // Pass setImageUrl to the Quiz component
  const handleImageChange = (url) => {
    setImageUrl(url);
  }
  useEffect(()=>{
    async function getToken(){
      let claim = await props.auth0.getIdTokenClaims();
      console.log(claim.__raw)
      let claimToken = claim.__raw
      setToken(claimToken);
      setUser(props.auth0.user)
    }
    getToken();

  }, [props.auth0.isAuthenticated])

  return (
    <>
      <AuthButtons />
      {props.auth0.isAuthenticated && (
        <>
          {/* Add any additional authenticated content here */}
        </>
      )}

      <Router>
        <Routes>
          {/* MovieRoom route */}
          <Route
            path="/movieroom"
            element={<MovieRoom imageUrl={imageUrl} trailerUrl={trailerUrl} />}
            
          />

          {/* Quiz route */}
          <Route
            path="/quiz"
            element={<Quiz setTrailerUrl={setTrailerUrl} onImageCreate={handleImageChange} token = {token} user={user}/>}
          />


          {/* AppRouter route for the root path */}
          <Route path="/" element={<Home />} />

          {/* About route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}


export default withAuth0(App);
