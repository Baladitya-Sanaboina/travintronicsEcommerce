import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    redirectToHome: false,
    redirectToAdmin: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (username === "admin" && password === "admin") {
      Cookies.set("jwtToken", "admin", { expires: 30 });
      this.setState({ redirectToAdmin: true });
    } else if (
      (username === "user1" || username === "user2") &&
      (password === "user1" || password === "user2")
    ) {
      Cookies.set("jwtToken", "user", { expires: 30 });
      Cookies.set("user", username, { expires: 30 });
      this.setState({ redirectToHome: true });
    } else {
      this.setState({ showSubmitError: true });
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  render() {
    const { showSubmitError, redirectToHome, redirectToAdmin } = this.state;
    const jwtToken = Cookies.get("jwtToken");

    if (jwtToken) {
      if (jwtToken === "admin") {
        return <Navigate to="/admin" />;
      } else if (jwtToken === "user") {
        return <Navigate to="/" />;
      }
    }

    if (redirectToHome) {
      return <Navigate to="/" />;
    } else if (redirectToAdmin) {
      return <Navigate to="/admin" />;
    }

    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/dbylngblb/image/upload/v1725792897/traveltech-logo-s_nktssv.jpg"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://res.cloudinary.com/dbylngblb/image/upload/v1725810406/ecommerce_login_epdede.png"
          className="login-image"
          alt="website login"
        />

        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1725792897/traveltech-logo-s_nktssv.jpg"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && (
            <p className="error-message">*Wrong Credentials</p>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
