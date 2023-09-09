import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { TaskLoading } from "../TaskLoading";
import { TaskError } from "../TaskError";
import { TaskEmpty } from "../TaskEmpty";
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
        {loading && (
          <>
            <TaskLoading />
            <TaskLoading />
            <TaskLoading />
          </>
        )}
        {error && <TaskError />}
        {!loading && searchedTasks.length === 0 && <TaskEmpty />}

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
