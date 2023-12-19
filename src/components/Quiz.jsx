import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  const [imageUrl, setImageUrl] = useState('');

  const fetchImage = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/openai/image`); // Update the URL
      console.log('Here is the server image URL', response.data);
      setImageUrl(response.data);
    } catch (error) {
      console.error('Error fetching image URL:', error);
    }
  };

  useEffect(() => {
    // Fetch image URL when the component mounts
    fetchImage();
  }, []);

  const handleGetImage = () => {
    // Trigger the fetch operation when the button is clicked
    fetchImage();
  };

  return (
    <div>
      <h2>Generated Image</h2>
      <button onClick={handleGetImage}>Get Image</button>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Generated Image" />
        </div>
      )}
    </div>
  );
}

export default Quiz;
