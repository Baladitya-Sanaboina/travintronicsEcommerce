import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const HomeCarousel = () => {
  return (
    <Carousel fade interval={1500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dbylngblb/image/upload/v1725809466/1_fgckgf.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dbylngblb/image/upload/v1725809466/2_salz9v.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dbylngblb/image/upload/v1725809466/3_twbhcq.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
