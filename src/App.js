// src/App.js
import React from 'react';
import Home from './components/Home';
import AddProduct from './components/AddProduct';

const App = () => {
    return (
        <div>
            <h1>Big Basket Clone</h1>
            <AddProduct />
            <Home />
        </div>
    );
};

export default App;
