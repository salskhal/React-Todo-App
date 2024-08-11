import {  useState } from "react";
import CustomButton from "./CustomButton";

import { useTodosContext } from "../lib/hooks";

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState("");

  const { handleAddTodo } = useTodosContext();
  return (
    <div>
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Add a Todo</h1>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();

          handleAddTodo(todoText);

          setTodoText("");
        }}
      >
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter todo"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />

        <CustomButton
          title="Add Todo"
          containerStyles="
        bg-[#717082] text-white py-2 px-4 rounded w-full hover:bg-[#5f6771]
        "
        />
      </form>
    </div>
  );
}
