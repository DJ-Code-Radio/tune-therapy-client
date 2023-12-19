import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  const [imageUrls, setImageUrls] = useState([]);

  const fetchImage = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/image`); // Update the URL
      console.log('Here are the server image URLs', response.data);
      setImageUrls([...imageUrls, response.data]);
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
      <h2>Generated Images</h2>
      <button onClick={handleGetImage}>Get Image</button>
      {imageUrls.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl.imageUrl} alt={`Generated Image ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Quiz;
