import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  quantities,
  onIncrease,
  onDecrease,
  onAddToCart,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id] || 1}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
