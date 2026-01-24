import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ProductGrid from "../../components/product/ProductGrid";

import pro1 from "../../assets/images/pro1.jpg";
import pro2 from "../../assets/images/pro2.jpg";
import pro3 from "../../assets/images/pro3.jpg";
import pro4 from "../../assets/images/pro4.jpg";
import pro5 from "../../assets/images/pro5.jpg";
import pro6 from "../../assets/images/pro6.jpg";
import pro7 from "../../assets/images/pro7.jpg";
import pro8 from "../../assets/images/pro8.jpg";

const categories = ["All", "Art", "Handmade", "Decor", "Accessories"];

const productsData = [
  { id: 1, name: "Handcrafted Ceramic Vase", price: 799, category: "Decor", image: pro1 },
  { id: 2, name: "Minimal Wall Art Frame", price: 1299, category: "Art", image: pro2 },
  { id: 3, name: "Macramé Hanging Decor", price: 999, category: "Handmade", image: pro3 },
  { id: 4, name: "Beaded Artisan Bracelet", price: 399, category: "Accessories", image: pro4 },
  { id: 5, name: "Textured Clay Vase", price: 799, category: "Decor", image: pro5 },
  { id: 6, name: "Modern Handmade Vase", price: 799, category: "Decor", image: pro6 },
  { id: 7, name: "Neutral Home Accent Vase", price: 799, category: "Decor", image: pro7 },
  { id: 8, name: "Luxury Craft Vase", price: 799, category: "Decor", image: pro8 },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#faf9f7] text-[#2b2b2b]">
      <Navbar />

      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-14 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
          Curated Collection
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-medium">
          Crafted with Intention
        </h1>
        <p className="mt-6 text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
          Discover thoughtfully designed pieces that blend tradition,
          craftsmanship, and modern elegance.
        </p>
      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-10 border-b border-gray-200 pb-6 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm tracking-wide transition relative
                ${selectedCategory === category
                  ? "text-black after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[1px] after:bg-black"
                  : "text-gray-500 hover:text-black"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <ProductGrid products={filteredProducts} />
      </section>

      <Footer />
    </div>
  );
}
