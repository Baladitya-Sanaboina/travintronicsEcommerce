import { Component } from "react";
import EachProduct from "../EachProduct";
import "./index.css";

class Women extends Component {
  state = { allWomenProducts: [] };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/women's clothing`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({ allWomenProducts: data });
    }
  };
  render() {
    const { allWomenProducts } = this.state;
    return (
      <div className="each-product-card-women">
        {allWomenProducts.map((eachItem) => (
          <EachProduct key={eachItem.id} product={eachItem} />
        ))}
      </div>
    );
  }
}
export default Women;
