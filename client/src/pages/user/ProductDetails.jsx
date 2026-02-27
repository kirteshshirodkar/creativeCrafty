import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { ProductInformation } from "../../components/product/ProductInformation";
import { MoreProducts } from "../../components/product/MoreProducts";

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

      <main className="bg-[#faf9f7] text-[#2b2b2b]">
        {/* PRODUCT INFO */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-36">
          <ProductInformation />
        </section>

        {/* DIVIDER */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-black/10" />
        </div>

        {/* MORE PRODUCTS */}
        <section className="max-w-7xl mx-auto px-6 py-36">
          <div className="mb-20 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#2b2b2b]/50 mb-4">
              You may also like
            </p>
            <h2 className="text-3xl font-medium">
              Curated for a refined lifestyle
            </h2>
          </div>

          <MoreProducts products={moreProducts} />
        </section>
      </main>

      <Footer />
    </>
  );
}
