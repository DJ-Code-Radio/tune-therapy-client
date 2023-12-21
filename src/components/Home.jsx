import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { useAuth0 } from '@auth0/auth0-react'; // Import the Auth0 hook
import '../css/Home.css';

function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // Function to handle login
  const handleLogin = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  };

  return (
    <Row>
      <Col className="container">
        <ListGroup className="list-group">
          <ListGroup.Item>Relax your mind.</ListGroup.Item>
          <ListGroup.Item>Take a deep breath.</ListGroup.Item>
          <ListGroup.Item>Enjoy the experience.</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col className="container image-col">
        {/* Add a button or clickable element that triggers the Auth0 login */}
        <Image
          src="src/assets/play-30619_1280.png"
          width='175px'
          roundedCircle
          onClick={handleLogin} // Call handleLogin when the image is clicked
          style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate clickability
        />
      </Col>
    </Row>
  );
}

export default Home;
