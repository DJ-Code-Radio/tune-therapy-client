import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ListeningRoom.css';

function ListeningRoom({ imageUrl }) {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    // Dummy data with titles
    const dummyData = [
      { id: 1, title: 'Song 1', author: 'Author 1' },
      { id: 2, title: 'Song 2', author: 'Author 2' },
      // Add more dummy data as needed
    ];

    try {
      // Simulate API call by setting the dummy data directly
      setSongs(dummyData);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="listening-room-container">
      <h2 className="title">Welcome To Your Listening Room</h2>
      <p>We'll drop some songs we think you'll like.</p>
      {/* Display the image inside a centered box container */}
      {imageUrl && (
        <div className="image-container">
          <img src={imageUrl} alt={`Generated Image`} />
        </div>
      )}

      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <h2 title={song.title}>{song.title}</h2>
            <p>{song.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeningRoom;
