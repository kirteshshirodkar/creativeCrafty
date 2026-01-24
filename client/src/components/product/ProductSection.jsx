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
        <section className="bg-[#12110E] py-28">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-light tracking-wide text-[#EDE6DD]">
                        Curated Essentials
                    </h2>
                    <p className="mt-4 text-sm text-[#A89F94]">
                        Thoughtfully designed. Timelessly crafted.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductSection;
