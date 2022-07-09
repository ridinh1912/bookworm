import { Navbar, Container, Nav } from 'react-bootstrap';
import "../../css/footer.css"
import React from 'react'

export default function Footer() {
  return (
    <Navbar className='footer' expand="lg" bg="light" variant="light">
        <Container className='d-flex flex-column align-items-start'>
            <h5>BOOKWORM</h5>
            <h6>District 13 - Ho Chi Minh City</h6>
            <h6>0999988879</h6>
        </Container>
    </Navbar>
  )
}

