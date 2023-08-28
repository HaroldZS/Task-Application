import React from "react";
import { TaskCounter } from "./TaskCounter";
import { TaskSearch } from "./TaskSearch";
import { TaskList } from "./TaskList";
import { TaskItem } from "./TaskItem";
import { CreateTaskButton } from "./CreateTaskButton";
import "./App.css";

// const defaultTasks = [
//   { text: "Cut onions", completed: true },
//   { text: "Play guitar", completed: false },
//   { text: "Walk to the moon", completed: false },
//   { text: "Listen to music", completed: false },
//   { text: "Draw a picture", completed: true },
// ];

// localStorage.setItem('TASKS_V1', defaultTasks);
// localStorage.removeItem('TASKS_V1');

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [tasks, saveTasks] = useLocalStorage("TASKS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks = tasks.filter(({ text }) =>
    text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text == text);
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text == text);
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <>
      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList completed={true}>
        {searchedTasks.map(({ text, completed }) => (
          <TaskItem
            key={text}
            text={text}
            completed={completed}
            onComplete={() => completeTask(text)}
            onDelete={() => deleteTask(text)}
          />
        ))}
      </TaskList>

      <CreateTaskButton />
    </>
  );
}

export default App;
