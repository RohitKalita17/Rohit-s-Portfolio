import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import DecisionSimulator from "@/components/DecisionSimulator";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <DecisionSimulator />
        <Stack />
        <Footer />
      </main>
    </>
  );
}
