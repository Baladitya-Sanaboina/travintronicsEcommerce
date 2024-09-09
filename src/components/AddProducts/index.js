import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const AddProducts = () => {
  const jwtToken = Cookies.get("jwtToken");
  const isAdmin = jwtToken === "admin";

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Add products component</h1>
    </div>
  );
};

export default AddProducts;
