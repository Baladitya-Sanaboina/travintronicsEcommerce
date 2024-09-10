import { Component } from "react";
import EachProduct from "../EachProduct";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";

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
  renderProducts = () => {
    const { allProducts } = this.state;
    return (
      <div className="each-product-card">
        {allProducts.map((eachItem) => (
          <EachProduct key={eachItem.id} product={eachItem} />
        ))}
      </div>
    );
  };
  renderLoader = () => {
    return (
      <div className="loader-container" data-testid="loader">
        <ThreeDots type="ThreeDots" color="#0050cf" height="50" width="50" />
      </div>
    );
  };
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? this.renderLoader() : this.renderProducts()}</div>;
  }
}

export default Products;
