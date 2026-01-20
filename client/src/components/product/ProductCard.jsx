import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-[#8b5e3c] font-bold mt-2">
          ₹ {product.price}
        </p>
        <button className="mt-4 w-full bg-[#8b5e3c] text-white py-2 rounded-lg hover:bg-[#734c32]">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
