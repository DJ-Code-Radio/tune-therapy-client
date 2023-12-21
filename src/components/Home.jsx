import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import backgroundPic from '../assets/background.mp4'
import playButton from '../assets/play-30619_1280.png'
import '../css/Home.css';

function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    const login = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect();
      } else {
        navigate('/quiz');
      }
    };

    login();
  };

  useEffect(() => {
    // Apply animation class after component mounts
    const items = document.querySelectorAll('.animated-item');
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 2}s`;
    });
  }, []);

  return (
    <Row>
      <video autoPlay muted loop id="video-bg">
        <source src={backgroundPic} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Col className="container">
        {/* Apply the animated-item class to each item */}
        <div className="animated-item" id="relax">
          Relax your mind.
        </div>
        <div className="animated-item" id="take">
          Take a deep breath.
        </div>
        <div className="animated-item" id="enjoy">
          Enjoy the experience.
        </div>
      </Col>
      <Col className="container image-col">
        <Image
          src= {playButton}
          width="100px"
          roundedCircle
          onClick={handleLogin}
          style={{ cursor: 'pointer' }}
        />
      </Col>
    </Row>
  );
}

export default Home;
