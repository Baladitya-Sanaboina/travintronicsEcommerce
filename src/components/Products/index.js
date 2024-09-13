import { Component } from "react";
import EachProduct from "../EachProduct";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
import NewProducts from "../NewProducts";

class Products extends Component {
  state = { allProducts: [], isLoading: true, newProducts: [] };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      const data = await response.json();
      this.setState({ allProducts: data, isLoading: false });
    }

    const newResponse = await fetch(`/products`);
    if (newResponse.ok) {
      const newData = await newResponse.json();
      this.setState({ newProducts: newData });
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

  renderNewProduct = () => {
    const { newProducts } = this.state;
    return (
      <div>
        <h1>New Products</h1>
        <div className="each-product-card">
          {newProducts.map((eachItem) => (
            <NewProducts key={eachItem.id} product={eachItem} />
          ))}
        </div>
      </div>
    );
  };

  renderAllProducts = () => {
    return (
      <div>
        {this.renderNewProduct()}
        {this.renderProducts()}
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
    return (
      <div>{isLoading ? this.renderLoader() : this.renderAllProducts()}</div>
    );
  }
}

export default Products;
