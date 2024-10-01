import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const dispath = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-gray-100 p-3 flex justify-between items-center rounded-lg"
        >
          <span className="text-gray-800">{todo.text}</span>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => dispath(removeTodo({ id: todo.id }))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Todos;
