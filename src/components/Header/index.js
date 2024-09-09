import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { CiLogin } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import "./index.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  const isAdmin = Cookies.get("jwtToken") === "admin";

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dbylngblb/image/upload/v1725792897/traveltech-logo-s_nktssv.jpg"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            {!isAdmin ? (
              <>
                <li className="nav-menu-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link to="/cart" className="nav-link">
                    Cart
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-menu-item">
                  <Link to="/admin" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link to="/product-add" className="nav-link">
                    Add Product
                  </Link>
                </li>
              </>
            )}
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            <CiLogin className="logout-icon" />
          </button>
          <button
            type="button"
            className="nav-hamburger-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <RxHamburgerMenu className="hamburger-icon" />
          </button>
        </div>
      </div>
      <div className={`nav-menu-mobile ${isDropdownOpen ? "open" : ""}`}>
        <ul className="nav-menu-list-mobile">
          {!isAdmin ? (
            <>
              <li className="nav-menu-item-mobile">
                <Link to="/" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                    alt="nav home"
                    className="nav-bar-image"
                  />
                </Link>
              </li>
              <li className="nav-menu-item-mobile">
                <Link to="/products" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                    alt="nav products"
                    className="nav-bar-image"
                  />
                </Link>
              </li>
              <li className="nav-menu-item-mobile">
                <Link to="/cart" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                    alt="nav cart"
                    className="nav-bar-image"
                  />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-menu-item-mobile">
                <Link to="/dashboard" className="nav-link">
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    className="nav-bar-image"
                  />
                </Link>
              </li>
              <li className="nav-menu-item-mobile">
                <Link to="/product-add" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                    alt="nav add product"
                    className="nav-bar-image"
                  />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
