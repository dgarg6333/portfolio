import React from "react";
import { Link } from "react-router-dom";

export default function Projects(props) {
  return (
    <div className="Card">
      <img className="Image" src={props.image} alt="" />
      <div className="Tags">
        {props.tags?.map((tag) => (
          <span className="Tag">{tag}</span>
        ))}
      </div>
      <div className="Details">
        <div className="Title">{props.title}</div>
        <div className="Description">{props.description}</div>
        <Link
          to={props.Link}
          class="btn1"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
