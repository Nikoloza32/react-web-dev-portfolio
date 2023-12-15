import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </section>
  );
};
export default App;
