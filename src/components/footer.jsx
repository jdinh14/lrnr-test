// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../App.css';

const Footer = () => {
  return (
    <footer className='footfoot'>
      <Navbar className='sticky-bottom' bg="primary" data-bs-theme="primary" expand="lg">
        <Container className="d-flex flex-column mb-3 justify-content-center">
          <Nav activeKey="/home">
            <Nav.Item className="p-2" >
              <Nav.Link className="text-light" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2" >
              <Nav.Link className="text-light"  href="/account">Account</Nav.Link>
            </Nav.Item>
            <Nav.Item  className="p-2">
              <Nav.Link className="text-light"  href="/quiz-generation">Quiz Generation</Nav.Link>
            </Nav.Item>
          </Nav>
          <p className="p-2 text-light">Embrace the power of our app and unlock the secrets of the universe, one quiz at a time. As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'</p>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
