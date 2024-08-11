import { createContext, useEffect, useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TodoContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  totalCount: number;
  completedCount: number;
};

export const TodoContext = createContext<TTodosContext | null>(null);

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }
  return [];
};

export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {


  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
  const { isAuthenticated } = useKindeAuth();

  // Derived State

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  // events handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("Log in to add more than 3 todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Side effects
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleDeleteTodo,
        toggleTodo,
        totalCount,
        completedCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
