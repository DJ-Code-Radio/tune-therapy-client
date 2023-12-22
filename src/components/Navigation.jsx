import { Nav, Navbar } from "react-bootstrap";
import '../css/Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation(){

    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom" style={{display:'flex', flexDirection: 'row', justifyContent: 'center', zIndex: '1', backgroundClip: 'text'}}>
            <Nav className="me">
              <NavLink style={{margin: "5px", fontSize: "25px", color:"white", fontFamily:'fantasy'}} to="/">Home</NavLink>
              <NavLink style={{margin: "5px", fontSize: "25px", color:"white", fontFamily:'fantasy'}} to="/quiz">Quiz</NavLink>
              <NavLink style={{margin: "5px", fontSize: "25px", color:"white", fontFamily:'fantasy'}} to="/about">About</NavLink>
            </Nav>
      </Navbar>
    )
}

export default Navigation