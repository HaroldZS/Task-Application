import React from "react";

function TaskCounter({ completed, total }) {
  return (
    <h1>
      You has completed {completed} of {total} tasks
    </h1>
  );
}

export { TaskCounter };
