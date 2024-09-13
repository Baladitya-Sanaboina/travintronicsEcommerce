import React, { useState } from "react";
import "./index.css";
import { v4 as id } from "uuid";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProductAdding = () => {
  const [formData, setFormData] = useState({
    id: id(),
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    availability: "",
    rate: "5",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false); // To handle upload state

  const uploadImage = async () => {
    if (!formData.image) return null; // Ensure there's an image to upload
    const imageRef = ref(storage, `images/${formData.id}`); // Use formData.id for a unique image path
    await uploadBytes(imageRef, formData.image); // Upload the image
    const imageUrl = await getDownloadURL(imageRef); // Get the download URL
    return imageUrl; // Return the URL to be used in formData
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file }); // Set the image file in formData
      setImagePreview(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProductButton = async (e) => {
    e.preventDefault();
    setUploading(true); // Start upload state
    const imageUrl = await uploadImage(); // Upload the image and get the URL
    if (imageUrl) {
      const updatedFormData = { ...formData, image: imageUrl }; // Update formData with the image URL
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      };
      const url = `http://localhost:3000/products`;
      const response = await fetch(url, options);
      if (response.ok) {
        alert("Product added successfully");
        setFormData({
          id: id(),
          title: "",
          price: "",
          description: "",
          category: "",
          image: "",
          availability: "",
          rate: "5",
        });
        setImagePreview(null);
      } else {
        alert("Product not added");
      }
    } else {
      alert("Failed to upload image");
    }
    setUploading(false); // End upload state
  };

  return (
    <div className="product-adding-main-bg">
      <div className="form-card">
        <form className="custom-form">
          <div className="input-in-two-row">
            <label className="each-input-feild">
              <input
                required
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="form-input"
              />
              <span>Title</span>
            </label>

            <label className="each-input-feild">
              <input
                required
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="form-input"
              />
              <span>Price</span>
            </label>
          </div>

          <label className="each-input-feild">
            <textarea
              required
              placeholder="Enter product description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-input"
              rows="4"
            />
          </label>

          <div className="input-in-two-row">
            <label className="each-input-feild">
              <select
                required
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">Select Category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Electronics">Electronics</option>
                <option value="Jewelry">Jewelry</option>
              </select>
            </label>

            <label className="each-input-feild">
              <input
                required
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="form-input"
              />
              <span>Availability</span>
            </label>
          </div>

          <div className="input-in-two-row">
            <label className="each-input-feild ">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="form-input"
              />
            </label>

            <div className="image-preview each-input-feild ">
              <img
                src={
                  imagePreview ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCoUtOal33JWLqals1Wq7p6GGCnr3o-lwpQ&s"
                }
                alt="Preview"
                className="preview-img"
              />
            </div>
          </div>
          <div>
            <button
              className="add-product-button"
              onClick={addProductButton}
              disabled={uploading} // Disable button while uploading
            >
              {uploading ? "Uploading..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductAdding;
