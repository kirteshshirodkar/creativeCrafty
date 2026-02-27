import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProductCard = ({ product, featured = false }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const cardRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        group relative overflow-hidden rounded-3xl bg-white
        transition-all duration-700
        opacity-0 translate-y-12
        shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)]
        hover:shadow-[0_45px_90px_-30px_rgba(0,0,0,0.3)]
        ${featured ? "scale-[1.08] z-10" : ""}
      `}
    >
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover
                     transition-transform duration-700
                     group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="
          absolute inset-0
          bg-black/30
          opacity-0
          group-hover:opacity-100
          transition duration-500
        " />

        {/* CTA */}
        <button
          className="
            absolute inset-0
            flex items-center justify-center
            text-white text-sm tracking-wide
            opacity-0 group-hover:opacity-100
            transition-all duration-500
          "
        >
          <span className="
            flex items-center gap-2
            border border-white/40
            px-6 py-3 rounded-full
            backdrop-blur-md
            hover:bg-white hover:text-[#2b2b2b]
            transition
          ">
            View Product
            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </span>
        </button>

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="
            absolute top-5 right-5
            rounded-full bg-[#faf9f7]/90
            p-2 backdrop-blur-md
            transition
          "
        >
          <Heart
            size={18}
            className={
              wishlisted
                ? "fill-red-500 text-red-500"
                : "text-[#2b2b2b]"
            }
          />
        </button>
      </div>

      {/* Content */}
      <div className="px-8 py-7">
        <h3 className="text-lg font-medium text-[#2b2b2b]">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-[#2b2b2b]/60 leading-relaxed">
          Crafted with precision and designed to elevate everyday living.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-semibold text-[#2b2b2b]">
            {product.price}
          </span>

          <span className="
            text-sm text-[#2b2b2b]/60
            group-hover:text-[#2b2b2b]
            transition
          ">
            View →
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
