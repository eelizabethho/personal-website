import Home from "@/components/sections/Home";
import FeaturedProject from "@/components/sections/FeaturedProject";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div id="home"><Home /></div>
      <FeaturedProject />
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="timeline"><Timeline /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
