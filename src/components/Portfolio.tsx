import AboutMe from "./AboutMe";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import TechStack from "./TechStack";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen container">
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Projects />
    </div>
  );
};

export default Portfolio;
