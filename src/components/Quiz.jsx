import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Quiz() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    // Dummy data
    const dummyData = [
      { id: 1, title: 'Image 1', url: 'src/assets/pexels-roman-odintsov-6898855.jpg' },
      { id: 2, title: 'Image 2', url: 'src/assets/pexels-roman-odintsov-6898855.jpg' },
      // Add more dummy data as needed
    ];
    // const handleBookCreate = async (newBook) => {
    //     try {
    //       let response = await axios.post(`${import.meta.env.VITE_SERVER}/books`, newBook);
    //       setBooks([...books, response.data]);
    //     } catch (error) {
    //       console.error('Error creating book:', error);
    //     }
    //   };

    try {
      // Simulate API call by setting the dummy data directly
      setImages(dummyData);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.url }width='150px' alt={image.title} />
            <p>{image.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Quiz;