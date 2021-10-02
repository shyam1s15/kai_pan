import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReactBootstrap, {Navbar,NavDropdown,Container,Nav,Button} from 'react-bootstrap';

function Navbarr() {
    return (
        <>
<Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">SPORTIZA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav.Link href="Tournaments/addtournament.js">Tournament</Nav.Link>
      <Nav.Link href="Tournaments/tournamentlist.js">View Tournament</Nav.Link>
      <Nav.Link href="#">Logout</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
}

export default Navbarr;

