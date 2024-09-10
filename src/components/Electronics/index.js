import { Component } from "react";
import EachProduct from "../EachProduct";
import { ThreeDots } from "react-loader-spinner";

class Electronics extends Component {
  state = { electronicsProduct: [], isLoading: true };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/electronics`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({ electronicsProduct: data, isLoading: false });
    }
  };
  renderProducts = () => {
    const { electronicsProduct } = this.state;
    return (
      <div className="each-product-card-men">
        {electronicsProduct.map((eachItem) => (
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

export default Electronics;
