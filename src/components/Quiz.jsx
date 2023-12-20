import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6
import '../css/Quiz.css'; // 


function Quiz({ onImageChange }) {
  const navigate = useNavigate(); // useNavigate hook for navigation in React Router v6

  const [selectedButton, setSelectedButton] = useState(null);

  const fetchImage = async (emotion) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/image`, {
        emotion: emotion,

      });

      // Call the handler to update imageUrl
      onImageChange(response.data.imageUrl);

      // Navigate to the ListeningRoom page after fetching the image
      navigate('/listeningroom');

    } catch (error) {
      console.error('Error fetching image URL:', error);
    }
  };

  const sendMusicGenre = async (genre) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/music`, {
        genre: genre,
      });
      console.log(genre);
      console.log('Music genre sent to the server:', response);
      // You can handle the response from the server if needed
    } catch (error) {
      console.error('Error sending music genre:', error);
    }
  };

  const handleMusicClick = async (genre) => {
    await sendMusicGenre(genre); // Pass the selected music genre to sendMusicGenre
  };

  return (
    <div className="quiz-container">
      <h2 className="title">Choose Your Current Mood</h2>
      {/* Display the image outside the map loop */}
      {/* Ensure that imageUrl is not retained after navigating away */}
      {false && <img src={imageUrl} alt={`Generated Image`} />}

      <div className="emotion-buttons">
        <Button variant="primary" onClick={() => fetchImage('sad music room')}>
          Sad
        </Button>
        <Button variant="primary" onClick={() => fetchImage('happy')}>
          Happy
        </Button>
        <Button variant="primary" onClick={() => fetchImage('angry')}>
          Angry
        </Button>
        <Button variant="primary" onClick={() => fetchImage('suprised')}>
          Suprised
        </Button>
        <Button variant="primary" onClick={() => fetchImage('trust')}>
          Trust
        </Button>
        <Button variant="primary" onClick={() => fetchImage('disgust')}>
          Disgust
        </Button>
      </div>

      <hr></hr>
      <h2 className='title'>Choose Your Favorite Music Genre</h2>
      <div className="music-buttons">
        <Button variant="primary" onClick={() => handleMusicClick('pop')}>
          Pop
        </Button>
        <Button variant="primary" onClick={() => handleMusicClick('rock')}>
          Rock
        </Button>
        <Button variant="primary" onClick={() => handleMusicClick('hip-hop')}>
          Hip-hop
        </Button>
        <Button variant="primary" onClick={() => handleMusicClick('electronic')}>
          Electronic
        </Button>
        <Button variant="primary" onClick={() => handleMusicClick('jazz')}>
          Jazz
        </Button>
        <Button variant="primary" onClick={() => handleMusicClick('country')}>
          Country
        </Button>
        <Button variant="primary" onClick={() => handleMusicClick('classical')}>
          Classical
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
