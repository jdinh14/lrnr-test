
import React from 'react';
// import { Link } from 'react-router-dom';
import '../App.css'




import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Lrnrnav() {
  return (
    
    <Navbar  bg="primary" data-bs-theme="primary" expand="lg">
      <Container >
        <Navbar.Brand style={{fontWeight: 'bold', color: 'white', fontSize:'30px'}} href="/">lrnr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
          <Nav variant="underline">
            <Nav.Link style={{color: 'white'}} href="/account">Account</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="/quiz-generation">Quiz Generation</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Lrnrnav;
