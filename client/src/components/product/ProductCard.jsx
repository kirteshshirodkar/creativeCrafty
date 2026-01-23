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
        group relative overflow-hidden
        rounded-[28px] bg-white
        border border-gray-100/70
        shadow-[0_18px_45px_rgba(0,0,0,0.08)]
        hover:shadow-[0_35px_80px_rgba(0,0,0,0.16)]
        transition-all duration-500
        hover:-translate-y-2
      "
    >
      {/* Wishlist */}
      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="
          absolute top-4 right-4 z-10
          h-10 w-10 rounded-full
          bg-white/70 backdrop-blur-md
          flex items-center justify-center
          shadow-md
          hover:scale-110 hover:shadow-lg
          transition
        "
      >
        <Heart
          size={18}
          className={
            wishlisted
              ? "fill-pink-400 text-pink-500"
              : "text-gray-500"
          }
        />
      </button>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-64 w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Luxury gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Title + Price */}
        <div className="space-y-1">
          <h3 className="text-[15px] font-semibold text-gray-800 tracking-wide">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-[#8b5e3c]">
            ₹{product.price}
          </p>
        </div>

        {/* Quantity + Cart */}
        <div className="flex items-center justify-between gap-4">
          {/* Quantity */}
          <div
            className="
              flex items-center gap-4
              rounded-full px-4 py-2
              bg-gray-50
              border border-gray-200
              shadow-inner
            "
          >
            <button
              onClick={() => onDecrease(product.id)}
              className="
                text-gray-600
                hover:text-[#8b5e3c]
                transition
              "
            >
              <Minus size={14} />
            </button>

            <span className="text-sm font-semibold text-gray-800">
              {quantity}
            </span>

            <button
              onClick={() => onIncrease(product.id)}
              className="
                text-gray-600
                hover:text-[#8b5e3c]
                transition
              "
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => onAddToCart(product, quantity)}
            className="
              flex items-center gap-2
              rounded-full
              bg-[#8b5e3c]
              px-5 py-2
              text-sm font-medium text-white
              shadow-[0_12px_30px_rgba(139,94,60,0.35)]
              hover:shadow-[0_18px_40px_rgba(139,94,60,0.5)]
              hover:scale-105
              transition-all
            "
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>

      {/* Soft shine on hover */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition
          bg-gradient-to-tr
          from-white/10 via-transparent to-white/20
        "
      />
    </div>
  );
}
