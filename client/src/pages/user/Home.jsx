import Footer from "../../components/common/Footer";
import Hero from "../../components/common/Hero";
import InfoSection from "../../components/common/InfoSection";
import Navbar from "../../components/common/navbar";
import ProductSection from "../../components/product/ProductSection";


const Home = () => {
    return (
        <>

            <Navbar />
            <Hero />
            <ProductSection />
            <InfoSection/>
            <Footer />
        </>
    );
};

export default Home;
