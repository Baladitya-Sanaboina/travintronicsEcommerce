import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import Cookies from "js-cookie";

const DetailedProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const getData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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

  const onIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const onDecrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const addProductToCart = async (productId) => {
    const userId = Cookies.get("user"); // Assuming you're using the 'user' cookie to get the current user ID
    const productData = product;
    const url = `/${userId}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product added to cart:", data);
      } else {
        console.error("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

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
          <div className="quantity-container">
            <button
              type="button"
              className="quantity-controller-button"
              onClick={onDecrementQuantity}
              data-testid="minus"
            >
              <BsDashSquare className="quantity-controller-icon" />
            </button>
            <p className="quantity">{quantity}</p>
            <button
              type="button"
              className="quantity-controller-button"
              onClick={onIncrementQuantity}
              data-testid="plus"
            >
              <BsPlusSquare className="quantity-controller-icon" />
            </button>
          </div>
          <button
            type="button"
            className="button add-to-cart-btn"
            onClick={() => addProductToCart(id)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
