import { Component } from "react";
import EachProduct from "../EachProduct";
import "./index.css";

class Mens extends Component {
  state = { menProducts: [] };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/men's clothing`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({ menProducts: data });
    }
  };
  render() {
    const { menProducts } = this.state;
    return (
      <div className="each-product-card-men">
        {menProducts.map((eachItem) => (
          <EachProduct key={eachItem.id} product={eachItem} />
        ))}
      </div>
    );
  }
}

export default Mens;
