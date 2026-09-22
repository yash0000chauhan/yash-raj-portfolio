import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { MouseGlow } from "@/components/mouse-glow";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { GithubSection } from "@/components/sections/github";
import { Hero } from "@/components/sections/hero";
import { HowIBuild } from "@/components/sections/how-i-build";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-zinc-100 focus:px-3 focus:py-2 focus:text-zinc-950"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <HowIBuild />
        <GithubSection />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
