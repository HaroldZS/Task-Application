import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskButton } from "../CreateTaskButton";

function AppUI({
  loading,
  error,
  completedTasks,
  totalTasks,
  searchValue,
  setSearchValue,
  searchedTasks,
  completeTask,
  deleteTask,
}) {
  return (
    <>
      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList completed={true}>
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {(!loading && searchedTasks.length === 0) && <p>Create your first task!</p>}

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

export { AppUI };
