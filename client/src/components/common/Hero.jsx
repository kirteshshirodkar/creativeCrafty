import heroImg from "../../assets/images/hero.jpg";
const Hero = () => {
    return (
        <section
            className="h-[100vh] bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url(${heroImg})`,
            }}
        >
            <div className="bg-black/50 w-full h-full flex items-center ">
                <div className="max-w-6xl mx-auto px-7 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">

                        Handmade with Love
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-xl">
                        Discover authentic handcrafted products made by skilled artisans.
                    </p>
                    <button className="bg-[#8b5e3c] px-6 py-3 rounded-lg hover:bg-[#734c32] transition">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
