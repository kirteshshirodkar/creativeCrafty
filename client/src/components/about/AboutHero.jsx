import aboutHero from "../../assets/images/aboutHero.jpg";

const AboutHero = () => {
  return (
    <section
      className="h-[60vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="bg-black/50 w-full h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Story, Our Craft
          </h1>
          <p className="max-w-2xl text-lg">
            Celebrating tradition, craftsmanship, and the hands behind every creation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
