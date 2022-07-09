import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../assets/bookworm_icon.svg'

import React from 'react'

export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
                <Container >
                    <Navbar.Brand href="/">
                        <img src={Logo} alt="Kiwi standing on oval" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                            <Nav.Link href="/"><b>Home</b></Nav.Link>
                            <Nav.Link href="/shop"><b>Shop</b></Nav.Link>
                            <Nav.Link href="/about"><b>About</b></Nav.Link>
                            <Nav.Link href="/cart"><b>Cart</b></Nav.Link>
                            <Nav.Link href="/cart"><b>Sign in</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
