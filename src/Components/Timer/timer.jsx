import React, { useState } from "react";
import "./timerStyles.css";

function Timer() {
  setInterval(getTime, 1000);
  const curr = new Date().toLocaleTimeString();
  var [Time, setTime] = useState(curr);

  function getTime() {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      {/* <button onClick={getTime}>Get Time</button> */}
    </div>
  );
}

export default Timer;
