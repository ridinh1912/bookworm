import React, { Component } from 'react';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import '../css/app.css';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/product/Product';
import Shop from './pages/Shop';



class Welcome extends Component {
    
    render() {
        return (
                <Routes>
                    <Route path='/shop' element={<Shop/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path="/product/:id" element={<Product/>}/>
                </Routes>
        );
    }
}

export default Welcome;
