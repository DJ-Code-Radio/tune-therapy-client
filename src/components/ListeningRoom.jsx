import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ListeningRoom() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    // Dummy data
    const dummyData = [
      { id: 1, title: 'Music 1', author: 'Author 1' },
      { id: 2, title: 'Music 2', author: 'Author 2' },
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
      setSongs(dummyData);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <ul>
        {songs.map((image) => (
          <li key={image.id}>
            <h2 title={image.title }/>
            <p>{image.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ListeningRoom;