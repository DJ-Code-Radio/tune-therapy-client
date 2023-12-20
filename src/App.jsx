// App.jsx
import React, { useState } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthButtons from './auth/AuthButtons.jsx';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import ListeningRoom from './components/ListeningRoom.jsx';
import About from './components/About';
import AppRouter from './components/AppRouter'; // Import the AppRouter component
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [imageUrl, setImageUrl] = useState(null);

  // Pass setImageUrl to the Quiz component
  const handleImageChange = (url) => {
    setImageUrl(url);
  };

  return (
    <>
      <AuthButtons />
      {props.auth0.isAuthenticated && (
        <>
          {/* <button >What does this do??</button> */}
        </>
      )}
      <Router>
        <Routes>
          <Route
            path="/listeningroom"
            element={<ListeningRoom imageUrl={imageUrl} />}
          />
          <Route
            path="/quiz"
            element={<Quiz onImageChange={handleImageChange} />}
          />
          <Route path="/" element={<AppRouter />} /> {/* Use AppRouter for the root path */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default withAuth0(App);
