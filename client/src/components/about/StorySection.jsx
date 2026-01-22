import artisansImg from "../../assets/images/artisan.jpg";

const StorySection = () => {
  return (
    <section className="py-20 bg-[#f5f3ee]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#3b2f2f] mb-6">
            The Heart Behind Our Brand
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our journey began with a simple belief — that handmade products
            carry a soul. Every piece tells a story of patience, tradition,
            and human connection.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We work closely with skilled artisans across communities,
            preserving age‑old techniques while bringing authentic
            handcrafted products to modern homes.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={artisansImg}
            alt="Our artisans"
            className="w-[75%] rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default StorySection;
