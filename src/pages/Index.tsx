import Navbar from "@/components/Navbar";
import HeroContainer from "@/components/HeroContainer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroContainer />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
