import ProductCard from "./ProductCard";

import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

const products = [
    {
        id: 1,
        name: "Handcrafted Leather Bag",
        price: "₹3,499",
        image: product1,
    },
    {
        id: 2,
        name: "Minimal Wooden Watch",
        price: "₹5,999",
        image: product2,
    },
    {
        id: 3,
        name: "Comfort Craft Sneakers",
        price: "₹4,299",
        image: product3,
    },
];

const ProductSection = () => {
    return (

        <section className="bg-[#f4f4f4] py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Intro Text */}
                <div className="max-w-2xl mb-12">
                    <p className="text-sm uppercase tracking-widest text-[#8b5e3c] mb-3">
                        Crafted with Care
                    </p>
                    <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
                        Thoughtfully made products for everyday elegance
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        Each piece in our collection is handcrafted by skilled artisans,
                        blending traditional techniques with modern design to bring you
                        products that last and inspire.
                    </p>
                </div>

                {/* Boxed Container */}
                <div
                    className="
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-sm
        px-10 py-16
      "
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

            </div>
        </section>

    );
};

export default ProductSection;
