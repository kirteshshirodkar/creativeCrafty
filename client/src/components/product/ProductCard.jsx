const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group">
      
      {/* Image */}
      <div className="h-60 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#3b2f2f]">
          {product.name}
        </h3>

        <p className="text-[#8b5e3c] font-bold mt-2">
          ₹ {product.price}
        </p>

        <button className="mt-4 w-full bg-[#8b5e3c] text-white py-2 rounded-lg hover:bg-[#734c32] transition">
          View Details
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
