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
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725890586/3_pgfu3h.jpg"
            alt="Image-Text-electronics"
            className="category-product-image"
            loading="lazy"
          />
          <div className="category-product-gradient-overlay">
            <div className="category-product-text-container">
              <div className="category-product-text">Electronics</div>
              <a href="/category/electronics" className="category-product-link">
                <p className="category-product-button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="category-product-item">
        <div className="category-product-image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725890586/4_ezyioc.jpg"
            alt="Image-Text-Jewlery"
            className="category-product-image"
            loading="lazy"
          />
          <div className="category-product-gradient-overlay">
            <div className="category-product-text-container">
              <div className="category-product-text">Jewlery</div>
              <a href="/category/jewelery" className="category-product-link">
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
