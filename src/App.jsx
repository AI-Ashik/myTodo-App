import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center text-white">Todo App</h1>
      </header>
      {/* Updated width for the main section */}
      <section className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-lg">
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex-grow">
            <input
              type="text"
              autoComplete="off"
              placeholder="Add a new todo"
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg hover:bg-blue-500 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default App;
