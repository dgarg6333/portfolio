import React from "react";
import profile from "./images/profile_photo.jpg";

export default function About() {
  return (
    <div className="profile" id="about">
      <h2 className="aboutTitle">About Me</h2>
      <div className="innerContainer">
        <div className="leftContainer">
          <p className="intro">
          Hey, I'm Deepanshu Garg, a final year Electrical Engineering student at NIT Jamshedpur. I'm a Competitive Programmer, Full Stack Web Developer, and active open source contributor. I seek software development opportunities to apply my skills and learn new technologies.
          💻✨🚀
          </p>
        </div>
        <div className="rightContainer">
          <img src={profile} className="profile-pic" alt="" />
        </div>
      </div>
    </div>
  );
}
