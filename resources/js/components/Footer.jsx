import { Navbar, Container, Nav } from 'react-bootstrap';
import "../../css/footer.css"
import React from 'react'

export default function Footer() {
  return (
    
    <Navbar className='footer' expand="lg" bg="light" variant="light">
        <Container className='d-flex flex-column align-items-start'>
            <h5>BOOKWORM</h5>
            <h6>Address</h6>
            <h6>Phone</h6>
        </Container>
    </Navbar>
  )
}

