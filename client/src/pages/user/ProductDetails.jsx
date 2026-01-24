import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";

import productImage from "../../assets/images/product1.jpg";

const ProductDetail = () => {
    const [qty, setQty] = useState(1);

    return (
        <section className="bg-[#f7f7f7] py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-white border border-gray-200 rounded-2xl p-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                        {/* LEFT – IMAGE */}
                        <div>
                            <img
                                src={productImage}
                                alt="Product"
                                className="w-full h-[520px] object-cover rounded-xl"
                            />
                        </div>

                        {/* RIGHT – CONTENT */}
                        <div>

                            {/* Category */}
                            <p className="text-xs uppercase tracking-widest text-[#8b5e3c] mb-3">
                                Handcrafted Collection
                            </p>

                            {/* Title */}
                            <h1 className="text-3xl font-medium text-gray-900 leading-snug">
                                Handcrafted Leather Bag
                            </h1>

                            {/* Price */}
                            <p className="text-xl text-gray-800 mt-4">
                                ₹3,499
                            </p>

                            {/* Divider */}
                            <div className="w-16 h-[2px] bg-gray-200 my-8" />

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                                Carefully handcrafted using premium leather, this bag blends
                                timeless craftsmanship with modern elegance. Designed to age
                                beautifully with everyday use.
                            </p>

                            {/* Quantity */}
                            <div className="flex items-center gap-6 mt-10">
                                <span className="text-sm font-medium text-gray-900">
                                    Quantity
                                </span>

                                <div className="flex items-center border rounded-md">
                                    <button
                                        onClick={() => qty > 1 && setQty(qty - 1)}
                                        className="px-3 py-2 hover:bg-gray-100 transition"
                                    >
                                        <Minus size={16} />
                                    </button>

                                    <span className="px-4 text-sm">{qty}</span>

                                    <button
                                        onClick={() => setQty(qty + 1)}
                                        className="px-3 py-2 hover:bg-gray-100 transition"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mt-12">

                                <button
                                    className="
                    flex-1
                    bg-gray-900 text-white
                    py-4 rounded-md
                    text-sm tracking-wide
                    hover:bg-black transition
                  "
                                >
                                    Add to Cart
                                </button>

                                <button
                                    className="
                    w-14 h-14
                    border border-gray-300
                    rounded-md
                    flex items-center justify-center
                    hover:border-gray-900 transition
                  "
                                >
                                    <Heart size={20} />
                                </button>

                            </div>

                            {/* Extra Info */}
                            <div className="mt-14 space-y-4 text-sm text-gray-600">
                                <p>✔ Free delivery across India</p>
                                <p>✔ Easy 7-day return</p>
                                <p>✔ Crafted by skilled artisans</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductDetail;
