import { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

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

  useEffect(() => {
    const intervalDateTime = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
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

        <section className="mt-4">
          <ul className="space-y-2">
            {task.map((currTask, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition"
                >
                  <span className="text-white">{currTask}</span>
                  <div className="flex space-x-2">
                    <button className="text-red-400 hover:text-red-300 transition">
                      <MdDeleteForever className="w-5 h-5" />
                    </button>
                    <button className="text-green-400 hover:text-green-300 transition">
                      <IoMdCheckmarkCircle className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default App;
