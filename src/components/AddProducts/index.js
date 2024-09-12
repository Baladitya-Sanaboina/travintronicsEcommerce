import { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
import AdminProducts from "../AdminProducts";

class AddProducts extends Component {
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
          <AdminProducts key={eachItem.id} product={eachItem} />
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
  onAddProductsBtn = () => {
    return <Navigate to="/new-product" />;
  };

  render() {
    const { isLoading } = this.state;
    const jwtToken = Cookies.get("jwtToken");
    const isAdmin = jwtToken === "admin";

    if (!isAdmin) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <div className="button-container" onClick={this.onAddProductsBtn}>
          <a href="/new-product">
            <button className="custom-button">
              <span className="button-content">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
                Add New Product
              </span>
            </button>
          </a>
        </div>
        {isLoading ? this.renderLoader() : this.renderProducts()}
      </div>
    );
  }
}

export default AddProducts;
