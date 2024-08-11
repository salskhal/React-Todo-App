import TodolistContent from "./TodolistContent";
import TodoListHeader from "./TodoListHeader";

export default function Todolist() {
  return (
    <div className="md:col-span-2   ">
      <TodoListHeader />
      <div className="">
        <TodolistContent />
      </div>
    </div>
  );
}
