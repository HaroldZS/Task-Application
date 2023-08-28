import React from "react";
import "./TaskSearch.css";

function TaskSearch({searchValue, setSearchValue}) {
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
