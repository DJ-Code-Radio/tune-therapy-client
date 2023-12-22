import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../css/Home.css';
import Background from '../assets/background.mp4';
import PlayButton from '../assets/play-30619_1280.png';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const login = () => {
        navigate('/quiz');
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
      <video autoPlay muted id="video-bg">
        <source src={Background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Col className="container">
        {/* Apply the animated-item class to each item */}
        <div className="animated-item" id="relax">
          Grab your popcorn!
        </div>
        <div className="animated-item" id="take">
          Sit back and relax.
        </div>
        <div className="animated-item" id="enjoy">
          Soak in the cinematic experience.
        </div>
      </Col>
      <Col className="container image-col">
        <Image
          src={PlayButton}
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
