import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { CertificatesMarquee } from "./sections/CertificatesMarquee";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Profile } from "./sections/Profile";
import { ProjectShowcase, SecondaryStrip } from "./sections/ProjectShowcase";

function App() {
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;

    // Heavier smoothing than the default so scroll reads as intentional motion.
    const lenis = new Lenis({ anchors: true, lerp: 0.09, wheelMultiplier: 1.05 });
    lenis.on("scroll", ScrollTrigger.update);
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduce]);

  return (
    <div className="relative min-h-screen bg-[#f7f6f3] text-[#16181d]">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <ProjectShowcase />
        <SecondaryStrip />
        <CertificatesMarquee />
        <Profile />
        <Contact />
      </main>
    </div>
  );
}

export default App;
