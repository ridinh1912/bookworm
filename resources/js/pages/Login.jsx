import React, { useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/shopSlice';


export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const axios = require('axios');
    const [token, setToken] = useState(true);

    useEffect(() => {
        localStorage.getItem("token");
        if (token) {
            // window.location.href = "/";
        }

    },[])
    
    const dispatch=useDispatch()
    async function postLogin(e) {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api/login", {
            email, password
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => { 
            if (result.status === 200) {
                dispatch(setUser(result.data.user))
                setToken(result.data.token)
                localStorage.setItem("token", result.data.token);
                localStorage.setItem("user", JSON.stringify(result.data.user));
                window.location.href = "/";
            } else {
                console.log('err')
            }
        }).catch(e => {

            console.log(e);
        });
        
    }
    return (
        <>
            <div style={{ minHeight: 'calc(100vh - 110px)', background: 'linear-gradient(to bottom, #ffffff 0%, #000066 1500%)' }}>
                <NavBar />
                <br /><br /><br /><br /><br /><br /><br />
                <Container style={{ width: '600px', backgroundColor: 'white', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px' }} className='d-flex justify-content-center' >

                    <Row style={{ paddingTop: '60px', paddingBottom: '60px' }}>

                        <h1 className='d-flex justify-content-center'>Log in</h1>
                        <Form onSubmit={(e) => postLogin(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' onChange={e => { setEmail(e.target.value); }} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' onChange={e => { setPassword(e.target.value); }} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button type="submit" variant="secondary">
                                Log in
                            </Button>
                        </Form>
                    </Row>

                </Container>
                <br /><br /><br /><br /><br /><br /><br /><br />

            </div><Footer />
        </>
    )
}
