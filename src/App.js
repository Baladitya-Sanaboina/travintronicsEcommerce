import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import AddProducts from "./components/AddProducts";

function Layout() {
  const location = useLocation();
  const shouldShowHeader = location.pathname !== "/login";

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/products" element={<ProtectedRoute />}>
          <Route index element={<Products />} />
        </Route>
        <Route path="/cart" element={<ProtectedRoute />}>
          <Route index element={<Cart />} />
        </Route>
        <Route path="/product-add" element={<ProtectedRoute />}>
          <Route index element={<AddProducts />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
