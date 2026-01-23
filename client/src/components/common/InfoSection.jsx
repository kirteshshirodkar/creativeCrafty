import craftImg from "../../assets/images/product1.jpg";

const InfoSection = () => {
  return (
    <section className="relative py-24 bg-[#FAF7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 text-sm tracking-widest text-[#C7A17A] uppercase">
              Our Craft
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2A27] leading-snug mb-6">
              Crafted by Skilled Hands,
              <span className="block text-[#6D4C41]">
                Rooted in Tradition
              </span>
            </h2>

            <p className="text-[15.5px] text-gray-600 leading-relaxed mb-4 max-w-xl">
              Every piece we create carries a story of patience, heritage,
              and human touch. Our artisans follow time-honored techniques
              refined over generations.
            </p>

            <p className="text-[15.5px] text-gray-600 leading-relaxed mb-8 max-w-xl">
              From responsibly sourced natural materials to careful hand-finishing,
              we focus on authenticity, sustainability, and thoughtful design.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "100% Handmade craftsmanship",
                "Eco-friendly natural materials",
                "Ethical & fair-trade process",
                "Supporting local artisan communities",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C7A17A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative soft circle */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-[#EDE6DC] -z-10 blur-sm" />

            {/* Image circle */}
            <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
              <img
                src={craftImg}
                alt="Crafting process"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Accent ring */}
            <div className="absolute w-[380px] h-[380px] rounded-full border border-[#C7A17A]/40" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
