import { MoreProducts } from "../../components/product/MoreProducts";
import { ProductInformation } from "../../components/product/ProductInformation";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const moreProducts = [
  {
    id: 1,
    name: "Classic Watch",
    price: "$99",
    img: "https://images.unsplash.com/photo-1512499617640-c2f999018b72",
  },
  {
    id: 2,
    name: "Minimal Watch",
    price: "$149",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    id: 3,
    name: "Leather Watch",
    price: "$129",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
];

export default function ProductDetails() {
  return (
    <>
      <Navbar />
      <div className="bg-[#faf9f7] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-30">
          <ProductInformation />
          <MoreProducts products={moreProducts} />
        </div>
      </div>
      <Footer/>
    </>
  );
}
