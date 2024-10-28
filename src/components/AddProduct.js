// src/components/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: '', price: '', description: '', category: '', imageUrl: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/products', product);
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
            <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
            <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
