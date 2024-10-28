// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <img src={product.imageUrl} alt={product.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
