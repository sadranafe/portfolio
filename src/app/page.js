import AboutMe from "./components/layout/About";
import HeroSection from "./components/layout/HeroSection";
import Manifesto from "./components/layout/Manifesto";
import Projects from "./components/layout/Projects";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <AboutMe/>
      <Manifesto/>
      <Projects/>
    </>
  );
};

export default Home;