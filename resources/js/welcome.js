import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../css/app.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Shop from './pages/Shop';



class Welcome extends Component {
    render() {
        return (
                <Routes>
                    <Route path='/shop' element={<Shop/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/' element={<Home/>} />
                </Routes>
        );
    }
}

export default Welcome;
