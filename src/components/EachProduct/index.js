import "./index.css";

const EachProduct = (props) => {
  const { product } = props;
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div className="product-card">
      <div class="card">
        <a href="/" class="link">
          <div class="image-placeholder"></div>
          <img class="image" src={image} alt={title} />
        </a>
        <div>
          <div class="button-container">
            <span
              role="button"
              aria-label="Add To Wishlist"
              tabindex="0"
              class="button-wishlist"
            ></span>
            <button class="button-cart"> Add To Cart </button>
          </div>
        </div>
      </div>
      <div class="product-details">
        <p class="product-name">{title}</p>
        <div class="price-container">
          <p class="low-price">As low as</p>
          <p class="actual-price">{price}</p>
        </div>
        <div class="price-container">
          <p class="low-price">Rating</p>
          <p class="actual-price">{rating.rate}</p>
        </div>
        <div class="color-options">
          <span class="color-circle"></span>
          <span class="color-circle"></span>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
