import AboutHero from "../../components/about/AboutHero";
import MissionValues from "../../components/about/MissionValues";
import StorySection from "../../components/about/StorySection";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <MissionValues />
      <StorySection />
      <Footer/>
    </>
  );
};

export default About;
