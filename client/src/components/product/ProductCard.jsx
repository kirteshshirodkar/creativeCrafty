import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="group relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(176,137,104,0.15), transparent 40%)`,
        }}
      />

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl bg-[#1A1916]">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-[420px] object-cover
            grayscale group-hover:grayscale-0
            scale-105 group-hover:scale-100
            transition-all duration-700 ease-out
          "
        />

        {/* Hover actions */}
        <div className="absolute inset-0 flex items-end justify-center pb-10 opacity-0 group-hover:opacity-100 transition duration-500">
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-[#EDE6DD] text-[#1A1916]
              px-6 py-3 rounded-full text-sm tracking-wide
              hover:bg-[#B08968] transition"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Text */}
      <div className="mt-6 text-center">
        <h3 className="text-lg text-[#EDE6DD] font-light tracking-wide">
          {product.name}
        </h3>

        {/* Price only on hover */}
        <p className="mt-2 text-sm text-[#B08968] opacity-0 group-hover:opacity-100 transition duration-500">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
