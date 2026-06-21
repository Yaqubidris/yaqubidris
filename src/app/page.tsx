import Navigation from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact"; // Imported securely

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#020712] selection:bg-sky-500/20 selection:text-sky-300 antialiased overflow-x-hidden">
      <Navigation />
      
      <main className="w-full">
        <div id="home">
          <Hero />
        </div>
        
        <About />
        
        <Projects />
        
        <Capabilities />
        
        <Contact />
      </main>
    </div>
  );
}