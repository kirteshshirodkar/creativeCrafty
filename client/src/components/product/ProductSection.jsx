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
        <section className="bg-[#edd6d6] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-10">
                    Featured Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
