import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";

export default function TodolistContent() {
  const { todos, toggleTodo } = useTodosContext();

  return (
    <ul>
      {todos.length === 0 && (
        <li className="text-xl text-[#ccc] h-full flex justify-center items-center">
          No todos yet
        </li>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-b-white"
          onClick={() => toggleTodo(todo.id)}
        >
          {/* <span className="line-through text-[#ccc]">{todo.title}</span> <DeleteButton /> */}
          <span className={todo.isCompleted ? "line-through text-[#ccc]" : ""}>
            {todo.title}
          </span>{" "}
          {/* <DeleteButton id={todo.id} setTodos={setTodos} />  */}
          <DeleteButton id={todo.id} />
        </li>
      ))}
    </ul>
  );
}
