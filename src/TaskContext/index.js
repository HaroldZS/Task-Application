import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const taskContext = React.createContext();

function TaskProvider({ children }) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks = tasks.filter(({ text }) =>
    text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({ text, completed: false });
    saveTasks(newTasks);
  };

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
    <taskContext.Provider
      value={{
        loading,
        error,
        completedTasks,
        totalTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
        addTask,
      }}
    >
      {children}
    </taskContext.Provider>
  );
}

export { taskContext, TaskProvider };

// localStorage.removeItem('TASKS_V1');

// const defaultTasks = [
//   { text: "Cut onions", completed: true },
//   { text: "Play guitar", completed: false },
//   { text: "Walk to the moon", completed: false },
//   { text: "Listen to music", completed: false },
//   { text: "Draw a picture", completed: true },
// ];

// localStorage.setItem('TASKS_V1', defaultTasks);
