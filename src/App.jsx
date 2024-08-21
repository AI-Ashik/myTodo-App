import { useEffect, useState } from "react";
import { DateTime } from "./components/DateTime";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import {
  getLocalStorageTodo,
  setLocalStorageTodo,
} from "./components/TodoLocalStorage";

const App = () => {
  const [task, setTask] = useState(() => getLocalStorageTodo());

  useEffect(() => {
    setLocalStorageTodo(task);
  }, [task]);

  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const ifTodoContentMatched = task.find((currTask) => currTask === content);
    if (ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleTodoDelete = (value) => {
    setTask(task.filter((currTask) => value !== currTask.content));
  };

  const handleClearAllTask = () => {
    setTask([]);
  };

  const handleCheckedTodo = (taskContent) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === taskContent) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center text-white">Todo App</h1>
        <DateTime />
      </header>
      <section className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-lg">
        <TodoForm onAddTodo={handleSubmit} />
        <section className="mt-4">
          <ul className="space-y-2">
            {task.map((currTask) => {
              return (
                <TodoList
                  key={currTask.id}
                  data={currTask.content}
                  onHandleDeleteTodo={handleTodoDelete}
                  checked={currTask.checked}
                  onHandleCheckedTodo={handleCheckedTodo}
                />
              );
            })}
          </ul>
        </section>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClearAllTask}
            className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-500 transition duration-200"
          >
            Clear All
          </button>
        </div>
      </section>
    </section>
  );
};

export default App;
