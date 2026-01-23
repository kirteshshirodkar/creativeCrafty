import products from "../../constants";
import ProductCard from "./ProductCard";


const ProductSection = () => {
    return (
        <section className="py-25 bg-[#f5f3ee]">
            <div className="max-w-7xl mx-auto px-3">
                <h2 className="text-3xl font-bold text-center mb-15 text-[#3b2f2f]">
                    Our Featured Products
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
