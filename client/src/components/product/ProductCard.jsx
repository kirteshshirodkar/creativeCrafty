import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="
      bg-white rounded-xl overflow-hidden
      transition-all duration-300
      hover:shadow-lg
    ">
      {/* Image */}
      <div className="relative bg-[#f6f6f6]">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-[280px] object-cover
            transition-transform duration-300
            hover:scale-[1.02]
          "
        />

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="
            absolute top-3 right-3
            bg-white p-2 rounded-full
            shadow-sm hover:shadow-md
            transition
          "
        >
          <Heart
            size={18}
            className={wishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-base font-semibold text-gray-900">
            ₹{product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="
              flex items-center gap-2
              border border-gray-300
              px-3 py-1.5 rounded-md
              text-sm font-medium
              hover:bg-gray-900 hover:text-white
              hover:border-gray-900
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
};

export default ProductCard;
