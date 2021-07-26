import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Tweetme</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;