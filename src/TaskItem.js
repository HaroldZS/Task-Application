import React from "react";
import "./TaskItem.css";

function TaskItem({ text, completed }) {
  return (
    <li className="task-item">
      <span
        className={`icon icon-check ${completed && "icon-check--active"}`}
      ></span>
      <p className={`task-item-p ${completed && "task-item-p--completed"}`}>
        {text}
      </p>
      <span className="icon icon-delete">X</span>
    </li>
  );
}

export { TaskItem };
