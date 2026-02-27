import { useState, useEffect } from "react";
import img1 from "../../assets/images/hero1.jpg";
import img2 from "../../assets/images/hero2.jpg";
import img3 from "../../assets/images/hero3.jpg";

const slidesLeft = [img1, img2];
const slidesRight = [img2, img3];

const SlidePanel = ({ images, title, desc }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="group relative h-[85vh] overflow-hidden transition-all duration-500">
      {/* Image */}
      <img
        src={images[index]}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Content */}
      <div className="absolute bottom-10 left-10 right-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <div className="bg-[#faf9f7]/90 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#2b2b2b]">
            {title}
          </h3>
          <p className="mt-2 text-sm text-[#2b2b2b]/70">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#faf9f7]">
      <div className="grid md:grid-cols-2">
        <SlidePanel
          images={slidesLeft}
          title="Handcrafted Essentials"
          desc="Thoughtfully made pieces that celebrate texture, form, and heritage."
        />

        <SlidePanel
          images={slidesRight}
          title="Modern Artisan Living"
          desc="A balance of tradition and modern design for everyday spaces."
        />
      </div>
    </section>
  );
};

export default Hero;
