import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/user/Home";
import Contact from "../pages/user/Contact";
import About from "../pages/user/About";
import Products from "../pages/user/Products";
import ScrollToTop from "../components/common/ScrollToTop";
import ProductDetails from "../pages/user/ProductDetails";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails" element={<ProductDetails/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
