import "./index.css";

const CategoryCards = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725877746/1_phmxt5.jpg"
            alt="Image-Text-Men"
            className="image"
            loading="lazy"
          />
          <div className="gradient-overlay">
            <div className="text-container">
              <div className="text">MEN</div>
              <a href="/" className="link">
                <p className="button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725877746/2_jxjfat.jpg"
            alt="Image-text-Women"
            className="image"
            loading="lazy"
          />
          <div className="gradient-overlay">
            <div className="text-container">
              <div className="text">Women</div>
              <a href="/" className="link">
                <p className="button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725877746/3_ts2dfl.jpg"
            alt="Image-text-Kids"
            className="image"
            loading="lazy"
          />
          <div className="gradient-overlay">
            <div className="text-container">
              <div className="text">Kids</div>
              <a href="/" className="link">
                <p className="button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725877746/4_pw80gg.jpg"
            alt="Image-text-watches"
            className="image"
            loading="lazy"
          />
          <div className="gradient-overlay">
            <div className="text-container">
              <div className="text">Watches</div>
              <a href="/" className="link">
                <p className="button">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryCards;
