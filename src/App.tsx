
import Header from "../src/Header/Header";
import Hero from "../src/Hero/Hero";
import About from "../src/About/About";
import ProJects from "../src/Projects/Projects";
import Footer from "../src/Footer/Footer";
import Services from "../src/Services/services"
import Contact from "../src/Contact/Contact"
import Skills from "../src/Skills/Skills"
import ScrollTop from "../src/Scrolltop/scrolltop"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services/>
      <Skills/>
      <ProJects />
      <Contact/>
      <ScrollTop/>
      <Footer />
    </>
  );
}

export default App;
