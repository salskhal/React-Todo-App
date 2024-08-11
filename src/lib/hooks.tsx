import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";


export function useTodosContext() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "TodosContext must be used within a TodosContextProvider component"
    );
  }

  return context;
}