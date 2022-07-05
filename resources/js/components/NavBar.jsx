import { Navbar, Container, Nav } from 'react-bootstrap';


import React from 'react'

export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
                <Container>
                    <Navbar.Brand href="/"><b>BOOKWORM</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/cart">Cart</Nav.Link>
                            <Nav.Link href="/cart">Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>

    )
}
