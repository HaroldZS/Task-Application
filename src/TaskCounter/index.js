import React from "react";
import { taskContext } from "../TaskContext";
import "./TaskCounter.css";

function TaskCounter() {
  const { completedTasks, totalTasks } = React.useContext(taskContext);

  return (
    <h1 className="task-counter">
      You has completed <span>{completedTasks}</span> of <span>{totalTasks}</span> tasks
    </h1>
  );
}

export { TaskCounter };
