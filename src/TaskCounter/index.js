import React from "react";
import "./TaskCounter.css";

function TaskCounter({ completed, total }) {
  return (
    <h1 className="task-counter">
      You has completed <span>{completed}</span> of <span>{total}</span> tasks
    </h1>
  );
}

export { TaskCounter };
