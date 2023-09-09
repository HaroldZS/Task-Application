import React from "react";
import { taskContext } from "../TaskContext";
import "./CreateTaskButton.css";

function CreateTaskButton() {
  const { setOpenModal } = React.useContext(taskContext);
  return (
    <button
      className="button-create-task"
      onClick={() => {
        setOpenModal(true);
      }}
    >
      Create Task
    </button>
  );
}

export { CreateTaskButton };
