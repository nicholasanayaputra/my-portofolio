import AboutMe from "@/components/home/About";
import Achievements from "@/components/home/Achievements";
import Hero from "@/components/home/Hero";
import Projects from "./project/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Achievements />
      <AboutMe />
      <Projects />
    </div>
  );
}
