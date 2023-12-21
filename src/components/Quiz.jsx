import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../css/Quiz.css';

function Quiz({ onImageCreate }) {
  const navigate = useNavigate();

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const sendMusicGenre = async () => {
    console.log('Selected Genre:', selectedGenre);
    console.log('Selected Emotion:', selectedEmotion);
    if (selectedGenre && selectedEmotion) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/openai/track`, {
          genre: selectedGenre,
          emotion: selectedEmotion,
        });

        console.log('Music genre sent to the server:', response);
      } catch (error) {
        console.error('Error sending music genre:', error);
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
      navigate('/listeningroom');
    } catch (error) {
      console.error('Error fetching image URL:', error);
    }
  };

  const handleMusicClick = async (genre) => {
    await setSelectedGenre(genre);
  };

  // const handleMusicClick = async (genre) => {
  //   setSelectedGenre(genre);
  // };

  useEffect(() => {
    console.log(selectedEmotion);
    sendMusicGenre();
  }, [selectedEmotion]);

  const handleEmotionClick = async (emotion) => {
    await setSelectedEmotion(emotion);
    await fetchImage(emotion);
    // console.log(selectedEmotion);
    // console.log(selectedGenre);
  };

  // const handleEmotionClick = async (emotion) => {
  //   setSelectedEmotion(emotion);
  // };

  return (
    <div className="quiz-container">
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
      <hr></hr>
      <h2 className="title">Choose Your Current Mood</h2>
      <div className="emotion-buttons">
        <Button variant="primary" onClick={() => handleEmotionClick('sad', setSelectedEmotion)}>
          Sad
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
        <Button variant="primary" onClick={() => handleEmotionClick('trust')}>
          Trust
        </Button>
        <Button variant="primary" onClick={() => handleEmotionClick('disgust')}>
          Disgust
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
