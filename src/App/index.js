import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

// localStorage.removeItem('TASKS_V1');

// const defaultTasks = [
//   { text: "Cut onions", completed: true },
//   { text: "Play guitar", completed: false },
//   { text: "Walk to the moon", completed: false },
//   { text: "Listen to music", completed: false },
//   { text: "Draw a picture", completed: true },
// ];

// localStorage.setItem('TASKS_V1', defaultTasks);

function App() {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks = tasks.filter(({ text }) =>
    text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  );
}

export default App;
