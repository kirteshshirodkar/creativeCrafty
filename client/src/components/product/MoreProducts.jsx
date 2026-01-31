import { ArrowRight } from "lucide-react";

export function MoreProducts({ products }) {
  return (
    <section className="mt-28">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-[#2b2b2b] tracking-tight">
          You May Also Like
        </h2>

        <button className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 text-[#2b2b2b] hover:opacity-70 transition">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-[#faf9f7] rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={p.name}
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="mt-5 space-y-2">
              <h3 className="font-semibold text-lg text-[#2b2b2b] line-clamp-1">
                {p.name}
              </h3>

              <p className="text-[#2b2b2b] font-medium">
                {p.price}
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 w-full flex items-center justify-center gap-2 border border-[#2b2b2b] py-3 rounded-xl font-medium hover:bg-[#2b2b2b] hover:text-[#faf9f7] transition-all">
              View Product
              <ArrowRight size={16} />
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}
