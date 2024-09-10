import { Component } from "react";
import "./index.css";
import EachProduct from "../EachProduct";
import { ThreeDots } from "react-loader-spinner";

class Jewlery extends Component {
  state = { jewleryProducts: [], isLoading: true };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/jewelery`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({ jewleryProducts: data, isLoading: false });
    }
  };
  renderProducts = () => {
    const { jewleryProducts } = this.state;
    return (
      <div className="each-product-card-men">
        {jewleryProducts.map((eachItem) => (
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

export default Jewlery;
