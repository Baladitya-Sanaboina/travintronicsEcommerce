import "./index.css";
import { Link } from "react-router-dom";

const NewProducts = (props) => {
  const { product } = props;
  const { id, title, price, description, category, image, rating } = product;

  return (
    <Link to={`/new-products/${id}`} className="link-item">
      <div className="product-item">
        <img src={image} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewProducts;
