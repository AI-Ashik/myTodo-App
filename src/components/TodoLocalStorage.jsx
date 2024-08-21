const reactTodoKey = "reactTodo";

export const getLocalStorageTodo = () => {
  const rawTodos = localStorage.getItem(reactTodoKey);
  if (!rawTodos) return [];
  try {
    return JSON.parse(rawTodos);
  } catch (error) {
    console.error("Failed to parse todos from localStorage:", error);
    return [];
  }
};

export const setLocalStorageTodo = (task) => {
  return localStorage.setItem(reactTodoKey, JSON.stringify(task));
};
