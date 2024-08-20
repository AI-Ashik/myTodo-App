import { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const App = () => {
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;

    setTask((prevTask) => [...prevTask, inputValue]);
  };

  const handleTodoDelete = (value) => {
    setTask(task.filter((currTask) => value !== currTask));
  };

  const handleClearAllTask = () => {
    setTask([]);
  };

  useEffect(() => {
    const intervalDateTime = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setDateTime(`Date : ${formattedDate} - Time: ${formattedTime}`);
    }, 10);
    return () => clearInterval(intervalDateTime);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center text-white">Todo App</h1>
        <h3 className="text-xl font-bold text-center text-white mt-3">
          {dateTime}
        </h3>
      </header>
      {/* Updated width for the main section */}
      <section className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-lg">
        <TodoForm onAddTodo={handleSubmit} />
        <section className="mt-4">
          <ul className="space-y-2">
            {task.map((currTask, index) => {
              return (
                <TodoList
                  key={index}
                  data={currTask}
                  onHandleDeleteTodo={handleTodoDelete}
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
