import React from "react";
import "./TaskSearch.css";

function TaskSearch(props) {
  const [searchValue, setSearchValue] = React.useState("");

  console.log(searchValue);

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
