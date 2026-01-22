const MissionValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#3b2f2f] mb-4">
            Our Mission & Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What drives us every day and shapes every product we create.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* MISSION */}
          <div className="bg-[#f5f3ee] p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To empower artisans by providing a platform that values
              craftsmanship, sustainability, and fair trade.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-[#f5f3ee] p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To build a global community that appreciates handmade
              products and supports traditional art forms.
            </p>
          </div>

          {/* VALUES */}
          <div className="bg-[#f5f3ee] p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-700">
              Authenticity, sustainability, ethical practices, and
              respect for people and culture.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionValues;
