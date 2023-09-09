import React from "react";
import { taskContext } from "../TaskContext";
import "./TaskSearch.css";

function TaskSearch() {
  const { searchValue, setSearchValue } = React.useContext(taskContext);

  return (
    <input
      placeholder="Cut onions"
      className="task-search"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}

export { TaskSearch };
