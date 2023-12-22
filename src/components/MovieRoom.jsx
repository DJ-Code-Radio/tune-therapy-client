import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/MovieRoom.css';
import Quiz from './Quiz.jsx';

function MovieRoom({ imageUrl, trailerUrl }) {
  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    try {
      setMovie(movie);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="movie-room-container" style={{backgroundImage: `url(${imageUrl})`}}>
      <h2 className="title">Welcome To Your Theater Room</h2>
      <p className="p">Here is a movie we think you will like.</p>
  
      <div className="trailer-container">
        <iframe 
          width="560" 
          height="315" 
          src={trailerUrl} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
  
}

export default MovieRoom;
