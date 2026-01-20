import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Bio />
      <Projects />
      <Services />
      <Gallery />
      <Contact />
    </main>
  );
}
