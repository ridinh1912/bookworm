import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/bookworm_icon.svg'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function NavBar() {
    const [checkLogin, setLogin] = useState(false);
    const [firstname, setfirstName] = useState('')
    const [lastname, setlastName] = useState('')
    const cartItem = useSelector(state => state.productReducer.cart)
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user")
        if (token) {
            setLogin(true);
        }
        if (user) {
        setfirstName(JSON.parse(user).first_name)
        setlastName(JSON.parse(user).last_name)
        }


    }, []);
    const handleLogout = () => {
        localStorage.clear()
        window.location.href = '/login'
    }
    const navigate=useNavigate()
    const handleCart = (id) => {
        navigate(id)
    }


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
                            <Nav.Link onClick={(()=> handleCart('/'))}  style={{ fontSize: '20px' }}><b>Home</b></Nav.Link>
                            <Nav.Link onClick={(()=> handleCart('/shop'))} style={{ fontSize: '20px' }}><b>Shop</b></Nav.Link>
                            <Nav.Link onClick={(()=> handleCart('/about'))} style={{ fontSize: '20px' }}><b>About</b></Nav.Link>
                            <Nav.Link onClick={(()=> handleCart('/cart'))} style={{ fontSize: '20px' }}><b>Cart ({cartItem.counter})</b></Nav.Link>
                            {checkLogin ?
                                (<>
                                    <NavDropdown className='justify-content-center'  style={{ fontSize: '20px' }} title="&nbsp;&nbsp;&nbsp;Welcome" id="basic-nav-dropdown">
                                        <NavDropdown.Item  disabled>{firstname} {lastname}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleLogout} href="/login">Log out</NavDropdown.Item>
                                    </NavDropdown>
                                </>) :
                                <Nav.Link style={{ fontSize: '20px' }} href="/login"><b>Log in</b></Nav.Link>
                            }
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
