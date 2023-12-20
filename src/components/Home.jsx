import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import '../css/Home.css';

function Home() {
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
        <Image src="src/assets/play-30619_1280.png" width='175px' roundedCircle />
      </Col>
    </Row>
  );
}

export default Home;
