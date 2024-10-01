import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Todos from "./Todos";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const dispath = useDispatch();
  const addTodoHndler = () => {
    if (!todo) return;
    dispath(addTodo({ text: todo, completed: false }));
    setTodo("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-purple-700">
          Todo List
        </h1>

        {/* Input for Adding Todo */}
        <div className="flex mb-4">
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Add a new task"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            className="bg-purple-700 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600"
            onClick={addTodoHndler}
          >
            Add
          </button>
        </div>

        {/* List of Todos */}
        <Todos/>
      </div>
    </div>
  );
};

export default TodoApp;
