import { Component } from "react";
import EachProduct from "../EachProduct";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";

class Mens extends Component {
  state = { menProducts: [], isLoading: true };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/men's clothing`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({ menProducts: data, isLoading: false });
    }
  };
  renderProducts = () => {
    const { menProducts } = this.state;
    return (
      <div className="each-product-card-men">
        {menProducts.map((eachItem) => (
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

export default Mens;
