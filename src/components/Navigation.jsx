import { Nav, Navbar } from "react-bootstrap";
import '../css/Navigation.css';


function Navigation(){

    return (
        <Navbar  expand="lg" className="bg-body-tertiary" fixed="bottom" style={{display:'flex', flexDirection: 'row', justifyContent: 'center', zIndex: '1', backgroundClip: 'text'}}>
            <Nav className="me">
              <Nav.Link style={{margin: "5px", fontSize: "25px", color:"white", fontFamily:'fantasy'}} href="/">Home</Nav.Link>
              <Nav.Link style={{margin: "5px", fontSize: "25px", color:"white", fontFamily:'fantasy'}} href="/quiz">Quiz</Nav.Link>
              <Nav.Link style={{margin: "5px", fontSize: "25px", color:"white", fontFamily:'fantasy'}} href="/about">About</Nav.Link>
            </Nav>
      
      </Navbar>
    )
}

export default Navigation