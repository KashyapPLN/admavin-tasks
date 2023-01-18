import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5 px-5">   
            <Nav.Link href='/'>Home</Nav.Link>          
            <Nav.Link href='/scroll'>Infinite Scroll</Nav.Link>
            <Nav.Link href="/parentchild">Parent Child List</Nav.Link>
            <Nav.Link href='/game'>Box Game</Nav.Link>            
            <Nav.Link href="/element">Element Transfer</Nav.Link>
            <Nav.Link href='/box'>Box Split</Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  )
}
