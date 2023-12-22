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
          <p>{`Negin Koushkakinejad: Graduated in graphic design.
            5 years of banking experience.
            3 years of active duty with the U.S. Army.
            Transitioning into software development.
            Passion for technology and a commitment to pushing boundaries.
.`}</p>
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
          <p>{`Errol Vidad: Possess a cinematic repertoire of skills in project management and information systems.
              Navy veteran and I utilize a diverse set of cinematic tools to navigate the vast landscapes of the film industry.
              Goal: Re-enter defense industry with a new set of coding skills.`}</p>
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
          <p>{`Lana Zumbrunn: Entrepreneur with two businesses, LevelUp Economy and Rooftop Global.
            Into blockchain, AI decentralized science and other emerging tech.
            Ready to layer software development skills on her current research and strategy montage.
            Loves of movies of all kinds!
`}</p>
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
          <p>{`Zach Moore: Has seen more movies than you. Veteran in a leadership position for three years. Detail and process oriented
            Looking forward to a career in python or other full stack software development.


`}</p>
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
          <p>{`Chris Acosta: Hi! I'm Chris Acosta, a movie buff with a love for epic soundtracks and endless popcorn. My superpower? Finding the perfect film for any mood.
            Expert at marathon movie nights. 
            On a quest for the ultimate "meh" movie.
            Join me for a fun, film-filled journey. Lights, Camera, Snack! 🍿✨
`}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default About;