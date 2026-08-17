import Navbar from "./components/Navbar/Navbar";
import Hero from "./HomeComponents/Hero/Hero";
import About from "./HomeComponents/About/About";
import Experience from "./HomeComponents/Experience/Experience";
import Skills from "./HomeComponents/Skills/Skills";
import Projects from "./HomeComponents/Projects/Projects";
import Education from "./HomeComponents/Education/Education";
import Contact from "./HomeComponents/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
