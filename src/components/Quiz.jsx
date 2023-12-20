import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Quiz() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const fetchImage = async (emotion) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/image`, {
        emotion,
      });
      console.log('Here is the server image URL', response.data.imageUrl);
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error('Error fetching image URL:', error);
    }
  };

  const handleClick = async (emotion) => {
    setSelectedButton(emotion);
    await fetchImage(emotion); // Pass the selected emotion to fetchImage
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
    </div>
  );
}

export default Quiz;
