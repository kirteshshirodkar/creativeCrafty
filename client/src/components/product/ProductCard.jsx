import { Plus, Minus, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
}) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      className="
        group relative bg-white rounded-3xl overflow-hidden
        border border-gray-100
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
        transition-all duration-300
        hover:-translate-y-2
      "
    >
      {/* Wishlist */}
      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="
          absolute top-4 right-4 z-10
          bg-white/90 backdrop-blur
          w-9 h-9 rounded-full
          flex items-center justify-center
          shadow-md hover:scale-110 transition
        "
      >
        <Heart
          size={18}
          className={
            wishlisted
              ? "fill-red-500 text-red-500"
              : "text-gray-500"
          }
        />
      </button>

      {/* Image */}
      <div className="relative overflow-hidden rounded-b-none">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-60 object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-[15px] font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-[#8b5e3c] font-bold text-lg">
            ₹{product.price}
          </p>
        </div>

        {/* Quantity + Cart */}
        <div className="flex items-center justify-between gap-3">
          {/* Quantity */}
          <div
            className="
              flex items-center gap-3
              border rounded-full px-4 py-2
              bg-gray-50
              shadow-inner
            "
          >
            <button
              onClick={() => onDecrease(product.id)}
              className="hover:text-[#8b5e3c] transition"
            >
              <Minus size={14} />
            </button>

            <span className="text-sm font-medium">
              {quantity}
            </span>

            <button
              onClick={() => onIncrease(product.id)}
              className="hover:text-[#8b5e3c] transition"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => onAddToCart(product, quantity)}
            className="
              flex items-center gap-2
              bg-[#8b5e3c] text-white
              px-5 py-2 rounded-full
              text-sm font-medium
              shadow-lg shadow-[#8b5e3c]/30
              hover:opacity-90 hover:scale-105
              transition
            "
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
