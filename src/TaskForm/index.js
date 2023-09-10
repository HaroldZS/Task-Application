import React from "react";
import "./TaskForm.css";

function TaskForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Write your new task!</label>
      <textarea placeholder="Cut onions for lunch"></textarea>
      <div className="taskForm-buttonContainer">
        <button type="" className="taskForm-button taskForm-button--cancel">
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
