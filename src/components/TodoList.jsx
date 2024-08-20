import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export const TodoList = ({ key, data, onHandleDeleteTodo }) => {
  return (
    <li
      key={key}
      className="flex items-center justify-between p-2 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition"
    >
      <span className="text-white">{data}</span>
      <div className="flex space-x-2">
        <button
          onClick={() => onHandleDeleteTodo(data)}
          className="text-red-400 hover:text-red-300 transition"
        >
          <MdDeleteForever className="w-5 h-5" />
        </button>
        <button className="text-green-400 hover:text-green-300 transition">
          <IoMdCheckmarkCircle className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};
