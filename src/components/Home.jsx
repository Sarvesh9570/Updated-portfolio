
import Navbar from "./Navbar";

import About from "./About";
import Skills from "./Skills";
import Tools from "./Tools";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";


function Home() {
 
  return (
    <>
      <div className="h-screen dark:bg-gray-900">
        <Navbar />
        <div className="pt-10 h-screen w-full ">
          {/* main section  */}
          <section className="bg-gray-900 " name="home">
            <Homepage />
          </section>

          {/*  About Section */}
          <section className="bg-gray-900 " name="about">
            <About />
          </section>

          {/*  Skills Section */}
          <section className="bg-gray-900 " name="skills">
            <Skills />
          </section>

          {/*  Tools Section */}
          <section className="bg-gray-900 " name="tools">
            <Tools />
          </section>

          {/* Projects */}
          <section className="bg-gray-900 " name="projects">
            <Projects />
          </section>

          {/* Projects */}
          <section className="bg-gray-900 " name="experience">
            <Experience />
          </section>
            {/*  Education Section */}
            <section className="bg-gray-900 " name="education">
            <Education />
          </section>

          {/*  Contact Section */}
          <section className="bg-gray-900 " name="contact">
            <Contact />
          </section>
          {/*  Footer Section */}
          <section className="bg-gray-900 ">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
