import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";

const NewDetailedProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const getData = async () => {
    try {
      const response = await fetch(`products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        console.error("Failed to fetch product data.");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading)
    return (
      <div className="loader-container" data-testid="loader">
        <ThreeDots type="ThreeDots" color="#0050cf" height="50" width="50" />
      </div>
    );

  if (!product) return <p>Product not found</p>;

  const {
    title,
    price,
    description,
    category,
    image,
    rating,
    availability,
    brand,
  } = product;
  const { rate, count } = rating;

  return (
    <div>
      <div className="product-details-container">
        <img src={image} alt="product" className="product-image" />
        <div className="product">
          <h1 className="product-name">{title}</h1>
          <p className="price-details">Rs {price}/-</p>
          <div className="rating-and-reviews-count">
            <div className="rating-container">
              <p className="rating">{rate}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="star"
              />
            </div>
            <p className="reviews-count">{count} Reviews</p>
          </div>
          <p className="product-description">{description}</p>
          <div className="label-value-container">
            <p className="label">Available:</p>
            <p className="value">{availability}</p>
          </div>
          <div className="label-value-container">
            <p className="label">Brand:</p>
            <p className="value">{brand}</p>
          </div>
          <hr className="horizontal-line" />
        </div>
      </div>
    </div>
  );
};

export default NewDetailedProduct;
