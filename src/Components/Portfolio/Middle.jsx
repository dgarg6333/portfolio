import React from "react";
import "./Landing.css";
import SkillSection from "./SkillSection";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { projectDetails } from "./projectDetails";

function Middle() {
  return (
    <>
      <div className="middle-container">
        <About />
        <hr />

        <SkillSection />

        <div className="projectDiv" id="projects">
          <h2 className="projectTitle">My Projects</h2>
          {projectDetails.map((projects) => (
            <Projects
              Link={projects.Link}
              key={projects.id}
              title={projects.title}
              description={projects.description}
              image={projects.image}
              tags={projects.tags}
              github={projects.github}
            />
          ))}
        </div>
        <hr />
        <Contact />
      </div>
    </>
  );
}

export default Middle;
