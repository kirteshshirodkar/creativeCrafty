import Footer from "../../components/common/Footer";
import Hero from "../../components/common/Hero";
import InfoSection from "../../components/common/InfoSection";
import Navbar from "../../components/common/Navbar";

import ProductSection from "../../components/product/ProductSection";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/");
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <InfoSection />
      <Footer />
    </>
  );
};

export default Home;
