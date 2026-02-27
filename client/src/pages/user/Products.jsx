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
    <>
      <Navbar />

      <main className="bg-[#faf9f7] text-[#2b2b2b]">
        {/* PAGE INTRO */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#2b2b2b]/50 mb-4">
            Curated Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            Objects crafted with intention
          </h1>
          <p className="mt-6 max-w-xl text-[#2b2b2b]/65 text-sm leading-relaxed">
            Discover thoughtfully designed pieces that blend tradition,
            craftsmanship, and modern form — made to last.
          </p>
        </section>

        {/* FILTERS */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex flex-wrap gap-6 border-b border-black/10 pb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  text-sm tracking-wide transition relative
                  ${selectedCategory === category
                    ? "text-[#2b2b2b] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[1px] after:bg-[#2b2b2b]"
                    : "text-[#2b2b2b]/50 hover:text-[#2b2b2b]"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* GRID */}
        <section className="max-w-7xl mx-auto px-6 pb-40">
          <ProductGrid products={filteredProducts} />
        </section>
      </main>

      <Footer />
    </>
  );
}
