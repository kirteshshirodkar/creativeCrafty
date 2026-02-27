import ProductCard from "./ProductCard";

import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

const products = [
  {
    id: 1,
    name: "Handcrafted Leather Bag",
    price: "₹3,499",
    image: product1,
  },
  {
    id: 2,
    name: "Minimal Wooden Watch",
    price: "₹5,999",
    image: product2,
  },
  {
    id: 3,
    name: "Comfort Craft Sneakers",
    price: "₹4,299",
    image: product3,
  },
];

const ProductSection = () => {
  return (
    <section className="bg-[#faf9f7] py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#2b2b2b]/50 mb-4">
            Featured Collection
          </p>

          <h2 className="text-4xl font-semibold text-[#2b2b2b] leading-tight">
            Objects crafted for modern living
          </h2>

          <p className="mt-6 text-[#2b2b2b]/65 max-w-xl">
            Elevated essentials created with timeless materials and
            thoughtful design — made to be lived with.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-end">
          <ProductCard product={products[0]} />
          <ProductCard product={products[1]} featured />
          <ProductCard product={products[2]} />
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
