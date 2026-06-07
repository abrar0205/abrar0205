import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { SystemDesign } from "./sections/SystemDesign";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SystemDesign />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
