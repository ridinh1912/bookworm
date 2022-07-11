import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../css/app.css';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/product/Product';
import Shop from './pages/Shop';

class Welcome extends Component {

    render() {
        return (
            <Routes>
                <Route path='/shop' element={<Shop />} />
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        );
    }
}

export default Welcome;
