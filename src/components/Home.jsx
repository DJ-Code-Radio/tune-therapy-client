import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>Relax your mind.</ListGroup.Item>
                        <ListGroup.Item>Take a deep breath.</ListGroup.Item>
                        <ListGroup.Item>Enjoy the experience.</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="src/assets/play-30619_1280.png" width='175px' roundedCircle />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
