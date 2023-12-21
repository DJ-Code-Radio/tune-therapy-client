import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import '../css/Quiz.css';

function Quiz({ onImageCreate, setTrailerUrl}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const sendGenre = async () => {
    console.log('Selected Genre:', selectedGenre);
    console.log('Selected Emotion:', selectedEmotion);
    if (selectedGenre && selectedEmotion) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/movie`, {
          genre: selectedGenre,
          emotion: selectedEmotion,
        });
        console.log(response.data.trailerUrl);
        console.log('Genre sent to the server:', response);
      } catch (error) {
        console.error('Error sending genre:', error);
      }
    } else {
      console.error('Both genre and emotion must be selected.');
    }
  };

  const fetchMovie = async () => {
    if (selectedGenre && selectedEmotion) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/movie`, {
          genre: selectedGenre,
          emotion: selectedEmotion,
        });
        console.log('Movie data:', response.data.trailerUrl);
        setTrailerUrl(response.data.trailerUrl);
        // Additional processing of the movie data can go here
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    } else {
      console.error('Both genre and emotion must be selected.');
    }
  };

  const fetchImage = async (emotion) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/image`, {
        emotion: emotion,
      });

      onImageCreate(response.data.imageUrl);
      navigate('/movieroom');
    } catch (error) {
      console.error('Error fetching image URL:', error);
    }
  };

  const handleMusicClick = async (genre) => {
    await setSelectedGenre(genre);
  };

  useEffect(() => {
    console.log(selectedEmotion);
    sendGenre();
    fetchMovie();
  }, [selectedEmotion]);

  const handleEmotionClick = async (emotion) => {
    try {
      setLoading(true); // Set loading to true when the emotion button is clicked
      await setSelectedEmotion(emotion);
      await fetchImage(emotion);
    } catch (error) {
      console.error('Error handling emotion click:', error);
    } finally {
      setLoading(false); // Set loading to false after the asynchronous operations are complete
    }
  };

  return (
    <div className="quiz-container">
      <h2 className='title'>Choose a Movie Genre</h2>
      <div className="music-buttons">
         <Button
          variant={selectedGenre === 'comedy' ? 'success' : 'primary'}
          onClick={() => handleMusicClick('comedy')}
        >
          Comedy
        </Button>
        <Button
          variant={selectedGenre === 'drama' ? 'success' : 'primary'}
          onClick={() => handleMusicClick('drama')}
        >
          Drama
        </Button>
        <Button variant={selectedGenre === 'action' ? 'success' : 'primary'}
          onClick={() => handleMusicClick('action')}
        >
          Action
        </Button>
        <Button variant={selectedGenre === 'holiday' ? 'success' : 'primary'}
          onClick={() => handleMusicClick('holiday')}
        >
          Holiday
        </Button>
        <Button variant={selectedGenre === 'sci-fi' ? 'success' : 'primary'}
          onClick={() => handleMusicClick('sci-fi')}
        >
          Sci-Fi
        </Button>
        <Button variant={selectedGenre === 'western' ? 'success' : 'primary'}
          onClick={() => handleMusicClick('western')}
        >
          Western
        </Button>
        <Button variant={selectedGenre === 'classic' ? 'success' : 'primary'}
          onClick={() => handleMusicClick('classic')}
        >
          Classic
        </Button>
      </div>
      <h2 className="title">Choose Your Current Mood</h2>
      <div className="emotion-buttons">
        {loading ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          <>
            <Button variant="primary" onClick={() => handleEmotionClick('sadness', setSelectedEmotion)}>
              Sadness
            </Button>
            <Button variant="primary" onClick={() => handleEmotionClick('happiness')}>
              Happiness
            </Button>
            <Button variant="primary" onClick={() => handleEmotionClick('excitement')}>
              Excitement
            </Button>
            <Button variant="primary" onClick={() => handleEmotionClick('angry')}>
              Angry
            </Button>
            <Button variant="primary" onClick={() => handleEmotionClick('surprised')}>
              Surprised
            </Button>
            <Button variant="primary" onClick={() => handleEmotionClick('trusting')}>
              Trusting
            </Button>
            <Button variant="primary" onClick={() => handleEmotionClick('disgusted')}>
              Disgusted
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
