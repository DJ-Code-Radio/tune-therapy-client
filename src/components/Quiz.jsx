import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Quiz() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const fetchImage = async (emotion) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/image`, {
        emotion: emotion,
      });
      console.log(emotion);
      console.log(response);
      console.log('Here is the server image URL', response.data.imageUrl);
      setImageUrl(response.data.imageUrl);
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
      console.log('Music genre sent to server:', response);
      // You can handle the response from the server if needed
    } catch (error) {
      console.error('Error sending music genre:', error);
    }
  };

  const handleClick = async (emotion) => {
    setSelectedButton(emotion);
    await fetchImage(emotion); // Pass the selected emotion to fetchImage
  };

  const handleMusicClick = async (genre) => {
    await sendMusicGenre(genre); // Pass the selected music genre to sendMusicGenre
  };

  return (
    <div>
      <h2>Generated Image</h2>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt={`Generated Image`} />
        </div>
      )}

      <Button variant="primary" onClick={() => handleClick('sad')}>
        Sad
      </Button>
      <Button variant="primary" onClick={() => handleClick('happy')}>
        Happy
      </Button>
      <Button variant="primary" onClick={() => handleClick('angry')}>
        Angry
      </Button>
      <Button variant="primary" onClick={() => handleClick('surprised')}>
        Surprised
      </Button>
      <Button variant="primary" onClick={() => handleClick('trust')}>
        Trust
      </Button>
      <Button variant="primary" onClick={() => handleClick('disgust')}>
        Disgust
      </Button>
      <hr></hr>
      <h2>Choose Music Genres</h2>
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
  );
}

export default Quiz;
