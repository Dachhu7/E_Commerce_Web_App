// src/pages/AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    description: '',
    originalPrice: '',
    offerPrice: '',
    reviews: [{ title: '', image: '', shortDescription: '' }],
    seller: { name: '', logo: '', rating: '', warranty: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('seller.')) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        seller: {
          ...prevProduct.seller,
          [name.split('.')[1]]: value,
        },
      }));
    } else {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleReviewChange = (index, e) => {
    const { name, value } = e.target;
    const updatedReviews = [...product.reviews];
    updatedReviews[index][name] = value;
    setProduct({ ...product, reviews: updatedReviews });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ ...product, id: Date.now() }); // Adding a unique ID
    setProduct({
      title: '',
      image: '',
      description: '',
      originalPrice: '',
      offerPrice: '',
      reviews: [{ title: '', image: '', shortDescription: '' }],
      seller: { name: '', logo: '', rating: '', warranty: '' },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Product</h1>
      {/* Form fields for product details */}
      <label>Title</label>
      <input type="text" name="title" value={product.title} onChange={handleChange} required />

      <label>Image URL</label>
      <input type="text" name="image" value={product.image} onChange={handleChange} required />

      <label>Description</label>
      <textarea name="description" value={product.description} onChange={handleChange} required></textarea>

      <label>Original Price</label>
      <input type="number" name="originalPrice" value={product.price} onChange={handleChange} required />

      <label>Offer Price</label>
      <input type="number" name="offerPrice" value={product.offerPrice} onChange={handleChange} required />

      <h2>Seller Details</h2>
      <label>Seller Name</label>
      <input type="text" name="seller.name" value={product.seller.name} onChange={handleChange} required />

      <label>Seller Logo URL</label>
      <input type="text" name="seller.logo" value={product.seller.logo} onChange={handleChange} required />

      <label>Seller Rating</label>
      <input type="number" name="seller.rating" value={product.seller.rating} onChange={handleChange} required />

      <label>Warranty Offer</label>
      <input type="text" name="seller.warranty" value={product.seller.warranty} onChange={handleChange} required />

      <h2>Product Reviews</h2>
      {product.reviews.map((review, index) => (
        <div key={index}>
          <label>Review Title</label>
          <input type="text" name="title" value={review.title} onChange={(e) => handleReviewChange(index, e)} required />

          <label>Review Image URL</label>
          <input type="text" name="image" value={review.image} onChange={(e) => handleReviewChange(index, e)} required />

          <label>Short Description</label>
          <textarea name="shortDescription" value={review.shortDescription} onChange={(e) => handleReviewChange(index, e)} required></textarea>
        </div>
      ))}

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
