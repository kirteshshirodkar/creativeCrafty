import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/user/Home";
<<<<<<< HEAD
import Contact from "../pages/user/Contact";
=======
import About from "../pages/user/About";
>>>>>>> 3e607ed26ac5a78c81ba24ac18a268680ad545fa

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
<<<<<<< HEAD
      <Route path="/contact" element={<Contact />} />
=======
      <Route path="/about" element={<About/>} />
>>>>>>> 3e607ed26ac5a78c81ba24ac18a268680ad545fa
    </Routes>
  );
};

export default AppRoutes;
