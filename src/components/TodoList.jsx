/* eslint-disable react/prop-types */
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
  checked,
}) => {
  return (
    <li className="flex items-center justify-between p-2 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition">
      <span
        className={`text-white ${
          checked ? "line-through decoration-red-600" : "text-decoration-none"
        }`}
      >
        {data}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={() => onHandleDeleteTodo(data)}
          className="text-red-400 hover:text-red-300 transition"
        >
          <MdDeleteForever className="w-5 h-5" />
        </button>
        <button
          onClick={() => onHandleCheckedTodo(data)}
          className="text-green-400 hover:text-green-300 transition"
        >
          <IoMdCheckmarkCircle className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};
