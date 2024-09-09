import React, { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

class Admin extends Component {
  render() {
    const jwtToken = Cookies.get("jwtToken");
    const isAdmin = jwtToken === "admin";

    if (!isAdmin) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <h1>This is the admin page</h1>
      </div>
    );
  }
}

export default Admin;
