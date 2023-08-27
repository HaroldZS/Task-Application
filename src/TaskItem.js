import React from "react";

function TaskItem({ text, completed }) {
  return (
    <li>
      <span>V</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}

export { TaskItem };
