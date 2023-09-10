import React from "react";
import { taskContext } from "../TaskContext";
import "./TaskForm.css";

function TaskForm() {
  const { addTask, setOpenModal } = React.useContext(taskContext);
  const [newTaskValue, setNewTaskValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new task!</label>
      <textarea
        placeholder="Cut onions for lunch"
        value={newTaskValue}
        onChange={onChange}
      ></textarea>
      <div className="taskForm-buttonContainer">
        <button
          type="button"
          className="taskForm-button taskForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="" className="taskForm-button taskForm-button--add">
          Add
        </button>
      </div>
    </form>
  );
}

export { TaskForm };
