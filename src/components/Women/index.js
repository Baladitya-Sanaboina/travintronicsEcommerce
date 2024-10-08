import { Component } from "react";
import EachProduct from "../EachProduct";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
class Women extends Component {
  state = { allWomenProducts: [], isLoading: true };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/women's clothing`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({ allWomenProducts: data, isLoading: false });
    }
  };
  renderProducts = () => {
    const { allWomenProducts } = this.state;
    return (
      <div className="each-product-card-women">
        {allWomenProducts.map((eachItem) => (
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
export default Women;
