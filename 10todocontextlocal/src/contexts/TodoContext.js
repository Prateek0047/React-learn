import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      todo: " todo message",
      id: 1,
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
