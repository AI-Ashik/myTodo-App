import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="flex-grow">
        <input
          type="text"
          autoComplete="off"
          placeholder="Add a new todo"
          className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg hover:bg-blue-500 transition duration-200 h-12"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
