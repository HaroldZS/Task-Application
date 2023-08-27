import React from "react";
import { TaskCounter } from "./TaskCounter";
import { TaskSearch } from "./TaskSearch";
import { TaskList } from "./TaskList";
import { TaskItem } from "./TaskItem";
import { CreateTaskButton } from "./CreateTaskButton";
import "./App.css";

const defaultTasks = [
  { text: "Cut onions", completed: true },
  { text: "Play guitar", completed: false },
  { text: "Walk to the moon", completed: false },
  { text: "Listen to music", completed: false },
  { text: "Draw a picture", completed: false },
];

function App() {
  return (
    <>
      <TaskCounter completed={5} total={9} />
      <TaskSearch />

      <TaskList completed={true}>
        {defaultTasks.map(({ text, completed }) => (
          <TaskItem key={text} text={text} completed={completed} />
        ))}
      </TaskList>

      <CreateTaskButton />
    </>
  );
}

export default App;
