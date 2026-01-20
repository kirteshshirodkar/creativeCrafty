import craftImg from "../../assets/images/product1.jpg";

const InfoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f] mb-6">
              Crafted by Skilled Hands
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Every product we create tells a story. Our artisans use
              traditional techniques passed down through generations, combining
              patience, skill, and love in every detail.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              From sourcing natural materials to hand‑finishing each piece, we
              ensure authenticity, sustainability, and uniqueness in everything
              we offer.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ 100% Handmade</li>
              <li>✔ Eco‑friendly materials</li>
              <li>✔ Fair trade & ethical process</li>
              <li>✔ Supporting local artisans</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className=" flex justify-center">
            <img
              src={craftImg}
              alt="Crafting process"
              className="w-[80%] md:w-[70%] rounded-2xl shadow-lg object-cover"
            />

            {/* Decorative background */}
            <div className="absolute -bottom-5 -right-5 w-[80%] md:w-[70%] h-full bg-[#f5f3ee] rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
