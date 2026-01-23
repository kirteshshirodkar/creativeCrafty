import heroImg from "../../assets/images/hero.jpg";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-[#FAF7F3]">
            {/* Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Handcrafted products"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                    <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm tracking-wide">
                        Authentic • Handmade • Sustainable
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Crafted with
                        <span className="block text-[#C7A17A]">Heart & Heritage</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg text-gray-200">
                        Explore thoughtfully handcrafted products made by skilled artisans,
                        blending tradition with modern elegance.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="px-8 py-3 rounded-full bg-[#C7A17A] text-black font-medium hover:opacity-90 transition">
                            Shop Collection
                        </button>
                        <button className="px-8 py-3 rounded-full border border-white/40 hover:bg-white/10 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
