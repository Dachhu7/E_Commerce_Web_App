import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddProductForm.css";

const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    originalPrice: "",
    offerPrice: "",
    reviewTitle: "",
    reviewImage: "",
    reviewDescription: "",
    sellerName: "",
    sellerLogo: "",
    rating: "",
    additionalFeatures: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" || name === "reviewImage" || name === "sellerLogo") {
      setProduct({ ...product, [name]: files[0] ? URL.createObjectURL(files[0]) : "" });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product); // Add new product to the product list
    navigate("/"); // Redirect to homepage after adding
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for product details */}
        <label>Title:</label>
        <input type="text" name="title" value={product.title} onChange={handleChange} required />

        <label>Image Upload:</label>
        <input type="file" name="image" onChange={handleChange} accept="image/*" required />

        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} required />

        <label>Original Price:</label>
        <input type="number" name="originalPrice" value={product.price} onChange={handleChange} required />

        <label>Offer Price:</label>
        <input type="number" name="offerPrice" value={product.offerPrice} onChange={handleChange} required />

        {/* Additional fields for review and seller details */}
        <label>Review Title:</label>
        <input type="text" name="reviewTitle" value={product.reviewTitle} onChange={handleChange} />

        <label>Review Image:</label>
        <input type="file" name="reviewImage" onChange={handleChange} accept="image/*" />

        <label>Review Description:</label>
        <textarea name="reviewDescription" value={product.reviewDescription} onChange={handleChange} />

        <label>Seller Name:</label>
        <input type="text" name="sellerName" value={product.sellerName} onChange={handleChange} />

        <label>Seller Logo:</label>
        <input type="file" name="sellerLogo" onChange={handleChange} accept="image/*" />

        <label>Rating:</label>
        <input type="number" name="rating" value={product.rating} onChange={handleChange} min="1" max="5" />

        <label>Additional Features:</label>
        <textarea name="additionalFeatures" value={product.additionalFeatures} onChange={handleChange} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
