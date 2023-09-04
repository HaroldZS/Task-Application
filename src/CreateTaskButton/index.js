import React from "react";
import "./CreateTaskButton.css";

function CreateTaskButton() {
  return (
    <button
      className="button-create-task"
      onClick={(event) => {
        console.log("Hi");
        console.log(event.target);
      }}
    >
      Create Task
    </button>
  );
}

export { CreateTaskButton };
