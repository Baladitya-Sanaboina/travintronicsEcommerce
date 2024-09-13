import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const Cart = () => {
  const [cartData, setCartData] = useState(null);

  const getData = async () => {
    const getUser = Cookies.get("user");
    const particularUser = `/${getUser}`;
    const response = await fetch(particularUser);
    if (response.ok) {
      const data = await response.json();
      // Initialize quantity for each item
      const cartWithQuantity = data.map((item) => ({ ...item, quantity: 1 }));
      setCartData(cartWithQuantity);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Function to handle quantity change
  const updateQuantity = (title, newQuantity) => {
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.title === title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const renderEachItem = (data) => {
    const {
      title,
      description,
      price,
      image,
      availability,
      rating,
      brand,
      quantity,
    } = data;

    return (
      <div
        className="row mb-4 d-flex justify-content-between align-items-center"
        key={title}
      >
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img src={image} className="img-fluid rounded-3" alt={title} />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">{brand}</h6>
          <h6 className="mb-0">{title}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            onClick={() => updateQuantity(title, Math.max(quantity - 1, 1))}
            className="cart-function-buttons"
          >
            -
          </button>
          <input
            min="1"
            name="quantity"
            value={quantity}
            type="number"
            className="form-control form-control-sm"
            onChange={(e) =>
              updateQuantity(title, Math.max(1, +e.target.value))
            } // Ensure minimum quantity is 1
          />

          <button onClick={() => updateQuantity(title, quantity + 1)}>+</button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">€ {price * quantity}</h6>{" "}
          {/* Update price based on quantity */}
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" className="text-muted">
            <i className="fas fa-times"></i>
          </a>
        </div>
      </div>
    );
  };

  const totalItems = cartData
    ? cartData.reduce((acc, item) => acc + item.quantity, 0)
    : 0;
  const totalPrice = cartData
    ? cartData.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{totalItems} items</h6>
                      </div>
                      <hr className="my-4" />
                      {cartData ? (
                        cartData.map((eachItem) => renderEachItem(eachItem))
                      ) : (
                        <p>Loading cart data...</p>
                      )}
                      <hr className="my-4" />
                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="/products" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items {totalItems}</h5>
                        <h5>€ {totalPrice.toFixed(2)}</h5>
                      </div>
                      <h5 className="text-uppercase mb-3">Shipping</h5>
                      <div className="mb-4 pb-2">
                        <select className="form-control">
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Express Delivery</option>
                        </select>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>€ {(totalPrice + 5).toFixed(2)}</h5>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
