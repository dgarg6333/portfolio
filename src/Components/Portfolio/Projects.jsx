import React from "react";
import { Link } from "react-router-dom";

export default function Projects(props) {
  return (
    <div className="Card">
      <img className="Image" src={props.image} alt="not found"/>
      <div className="Tags">
        {props.tags?.map((tag) => (
          <span className="Tag">{tag}</span>
        ))}
      </div>
      <div className="Details">
        <div className="Title">{props.title}</div>
        <div className="Description">{props.description}</div>
        <div class="project_btn">
          <div class="btn-container">
            <a href={props.Link} class="btn_project">View Project</a>
            <a href={props.github} class="btn_project">View Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}
