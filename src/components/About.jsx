import Carousel from 'react-bootstrap/Carousel';
import background from '../assets/theater.png'
import dummy from '../assets/dummy.png';

import '../css/About.css'
function About() {
  return (
    <div className='profiles-container' style={{backgroundImage: background}}>
    <Carousel fade>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 image"
          src={dummy}
          alt='test'
        />
        <Carousel.Caption>
          <h3>Negin</h3>
          <p>{`Hello, I'm Negin, a 32-year-old trailblazer with a story shaped by
           resilience and relentless pursuit of dreams.`}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 image"
          src={dummy}
          alt='test'
        />
        <Carousel.Caption>
          <h3>Errol</h3>
          <p>{`Hi, I'm Errol Vidad. Naval Officer = Project Manager = Systems
            Analyst = Software Developer. I have over a decade of military
            experience in both active and reserve naval components and a year of
            defense contracting work in information systems. I am passionate
           about formulating innovative software solutions to address military
           challenges and I would like to bring my diverse expertise to benefit
        meaningful projects in the defense sector`}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 image"
          src={dummy}
          alt='test'
        />
        <Carousel.Caption>
          <h3>Lana</h3>
          <p>{`Hi I'm Lana....`}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 image"
          src={dummy}
          alt='test'
        />
        <Carousel.Caption>
          <h3>Zach</h3>
          <p>{`Hi I'm Zach`}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 image"
          src={dummy}
          alt='test'
        />
        <Carousel.Caption>
          <h3>Chris</h3>
          <p>{`Hi im chris`}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default About;