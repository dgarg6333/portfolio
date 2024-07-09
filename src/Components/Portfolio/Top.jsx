import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Top() {
  setInterval(getTime, 1000);
  const curr = new Date().toLocaleTimeString();
  var [Time, setTime] = useState(curr);

  function getTime() {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div className="top-container ">
      <h4 className="hey">
        Hey there!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h4>
      <h1 className="typed1">
        I'm <span className="name">Deepanshu Garg</span>
      </h1>
      <p className="pie typed2">
        a programmer
      </p>
      <Link
        to="https://drive.google.com/file/d/1o6FXDKEZ7quXx12Ob-PPfJlxlWQOhrqR/view?usp=drivesdk"
        className="btn1"
      >
        My Resume
      </Link>
      <a className="btn2" href="mailto:dgarg6333@gmail.com">
        Contact Me
      </a>
      <h1 className="timer">{Time}</h1>
    </div>
  );
}

export default Top;
