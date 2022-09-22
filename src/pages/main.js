import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Cart from './cart/cart';
import Product from '../components/product/product';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/product/:product' element={<Product/>} />
        </Routes>
    );
};


export default Main;