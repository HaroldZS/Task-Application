import React from "react";
import "./TaskLoading.css";

function TaskLoading() {
  return (
    <li className="loading-item">
      <span className="loading-icon loading-icon-check"></span>
      <span className="loading-icon loading-icon-delete">X</span>
    </li>
  );
}

export { TaskLoading };
