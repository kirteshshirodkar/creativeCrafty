
import products from "../../constants";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <section className="py-16 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#3b2f2f] mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of handcrafted products,
            made with care and tradition.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
