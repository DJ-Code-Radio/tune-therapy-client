// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Note the change from `Switch` to `Routes`
import Quiz from './Quiz';
import ListeningRoom from './ListeningRoom';
import Home from './Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes> {/* Change this line from <Switch> to <Routes> */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/listeningroom" element={<ListeningRoom />} />
        <Route path="/" element={<Home />} />
      </Routes> {/* Change this line from </Switch> to </Routes> */}
    </Router>
  );
};

export default AppRouter;
