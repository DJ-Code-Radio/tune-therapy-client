// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Note the change from `Switch` to `Routes`
import Quiz from './Quiz';
import MovieRoom from './MovieRoom';
import Home from './Home';
import About from './About'

const AppRouter = () => {
  return (
    <Router>
      <Routes> {/* Change this line from <Switch> to <Routes> */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/movieroom" element={<MovieRoom />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home />} />
      </Routes> {/* Change this line from </Switch> to </Routes> */}
    </Router>
  );
};

export default AppRouter;
