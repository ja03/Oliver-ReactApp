import Hero from "./Components/Hero";
import About_Section from "./Components/About-Section";
import Projects from "./Components/Projects";
import Notion_section from "./Components/Notion-section";
import Footer from "./Components/Footer";
import Foot from "./Components/Foot";
function App() {
  return (
    <div className="scroll-smooth selection:bg-cl_2/40 overflow-hidden">
      <div className="container   mb-32 flex flex-col gap-[128px]">
        <Hero />
        <About_Section />
        <Projects />
        <Notion_section/>
        <Footer />
      </div>
      <Foot />
    </div>
  );
}

export default App;
