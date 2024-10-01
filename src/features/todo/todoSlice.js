import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(5), text: "Redux Toolkit", isCompleted: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  addTodo: (state, action) => {
    const todo = {
      id: nanoid(5),
      text: action.payload.text,
      isCompleted: action.payload.completed,
    };
    state.push(todo);
    return state;
  },
  removeTodo: (state, action) => {
    return state.filter((todo) => todo.id !== action.payload.id);
  },
  getAllTodos: (state) => {
    return state;
  },
  updateTodo: (state, action) => {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          text: action.payload.text,
        };
      }
      return todo;
    });
  },
});

export const { addTodo, removeTodo, getAllTodos, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
