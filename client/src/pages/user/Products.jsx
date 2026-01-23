import { useState } from "react";
import ProductGrid from "../../components/product/ProductGrid";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/Footer";
import pro1 from "../../assets/images/pro1.jpg"
import pro2 from "../../assets/images/pro2.jpg"
import pro3 from "../../assets/images/pro3.jpg"
import pro4 from "../../assets/images/pro4.jpg"
import pro5 from "../../assets/images/pro5.jpg"
import pro6 from "../../assets/images/pro6.jpg"
import pro7 from "../../assets/images/pro7.jpg"
import pro8 from "../../assets/images/pro8.jpg"


const categories = ["All", "Art", "Handmade", "Decor", "Accessories"];

const productsData = [
  {
    id: 1,
    name: "Handmade Vase",
    price: 799,
    category: "Decor",
    image: pro1,
  },
  {
    id: 2,
    name: "Wall Art Frame",
    price: 1299,
    category: "Art",
    image: pro2,
  },
  {
    id: 3,
    name: "Macrame Hanger",
    price: 999,
    category: "Handmade",
    image: pro3,
  },
  {
    id: 4,
    name: "Beaded Bracelet",
    price: 399,
    category: "Accessories",
    image: pro4,
  },
  {
    id: 5,
    name: "Handmade Vase",
    price: 799,
    category: "Decor",
    image: pro5,
  },
  {
    id: 6,
    name: "Handmade Vase",
    price: 799,
    category: "Decor",
    image: pro6,
  },
  {
    id: 7,
    name: "Handmade Vase",
    price: 799,
    category: "Decor",
    image: pro7,
  },
  {
    id: 8,
    name: "Handmade Vase",
    price: 799,
    category: "Decor",
    image: pro8,
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quantities, setQuantities] = useState({});

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
        (product) => product.category === selectedCategory
      );

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleAddToCart = (product, quantity) => {
    console.log("Add to cart:", product, quantity);
    // connect cart logic later
  };

  return (
    <div>

      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Our Products
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm border transition
              ${selectedCategory === category
                  ? "bg-[#8b5e3c] text-white"
                  : "hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductGrid
          products={filteredProducts}
          quantities={quantities}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onAddToCart={handleAddToCart}
        />
      </section>
      <Footer />
    </div>
  );
}
