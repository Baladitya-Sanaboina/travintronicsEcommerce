import { Component } from "react";
import EachProduct from "../EachProduct";
import "./index.css";

class Products extends Component {
  state = { allProducts: [], isLoading: true };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      const data = await response.json();
      this.setState({ allProducts: data, isLoading: false });
    }
  };
  render() {
    const { allProducts, isLoading } = this.state;
    return (
      <div className="each-product-card">
        <div>{isLoading && <h1>Loading...</h1>}</div>
        {allProducts.map((eachItem) => (
          <EachProduct key={eachItem.id} product={eachItem} />
        ))}
      </div>
    );
  }
}

export default Products;
