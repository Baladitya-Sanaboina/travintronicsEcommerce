import "./index.css";

const CategoryCards = () => {
  return (
    <div className="category-product-container">
      <div className="category-product-item">
        <div className="category-product-image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725877746/1_phmxt5.jpg"
            alt="Image-Text-Men"
            className="category-product-image"
            loading="lazy"
          />
          <div className="category-product-gradient-overlay">
            <div className="category-product-text-container">
              <div className="category-product-text">MEN</div>
              <a href="/category/men" className="category-product-link">
                <p className="category-product-button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="category-product-item">
        <div className="category-product-image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725877746/2_jxjfat.jpg"
            alt="Image-Text-Women"
            className="category-product-image"
            loading="lazy"
          />
          <div className="category-product-gradient-overlay">
            <div className="category-product-text-container">
              <div className="category-product-text">WOMEN</div>
              <a href="/category/women" className="category-product-link">
                <p className="category-product-button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="category-product-item">
        <div className="category-product-image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725877746/3_ts2dfl.jpg"
            alt="Image-Text-Kids"
            className="category-product-image"
            loading="lazy"
          />
          <div className="category-product-gradient-overlay">
            <div className="category-product-text-container">
              <div className="category-product-text">KIDS</div>
              <a href="/" className="category-product-link">
                <p className="category-product-button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="category-product-item">
        <div className="category-product-image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725877746/4_pw80gg.jpg"
            alt="Image-Text-Watches"
            className="category-product-image"
            loading="lazy"
          />
          <div className="category-product-gradient-overlay">
            <div className="category-product-text-container">
              <div className="category-product-text">WATCHES</div>
              <a href="/" className="category-product-link">
                <p className="category-product-button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryCards;
