import { Component } from "react";
import axios from "axios";
import HomeCarousel from "../Carousel";
import "./index.css";
import "../CategoryCards";
import CategoryCards from "../CategoryCards";

class Home extends Component {
  state = { productData: "" };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await axios.get("/products");
    console.log(response.data);
  };

  render() {
    return (
      <div>
        <HomeCarousel />
        <div className="products-section">
          <h1>Our Products</h1>
          <CategoryCards />
        </div>
      </div>
    );
  }
}

export default Home;
