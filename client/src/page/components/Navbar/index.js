import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Icon} from './style'


function Navbars(props) {
  const {setIsOpen, isOpen} = props.value
  return (
    <Navbar bg="dark" variant="dark">
        <Container  fluid>
          <Navbar.Brand>
            <Button onClick={()=> setIsOpen(!isOpen)} variant="primary">
              <Icon className="fa-solid fa-list"></Icon>
            </Button>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink href="#home">Home</NavLink>
          </Nav>
          <Nav className="me-auto">
            <NavLink href="#home">logo</NavLink>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navbars;