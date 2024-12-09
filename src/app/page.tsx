import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Projects from "./component/projects";
import About from "./component/about";
import Skill from "./component/skills";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Projects/>
    <Contact/>
    <About/>
    <Skill/>
  </div>
  );
}
