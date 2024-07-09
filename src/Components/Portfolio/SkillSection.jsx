import React from "react";

import { skills } from "./skills";

export default function SkillSection() {
  return (
    <div className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="row ">
        <div className="SkillsContainer">
          {skills.map((skill) => (
            <div className="Skill">
              <h2 className="SkillTitle">{skill.title}</h2>
              <div className="SkillList">
                {skill.skills.map((item) => (
                  <div className="SkillItem">
                    <img className="SkillImage" src={item.image} alt="" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
