import { useTodosContext } from "../lib/hooks";

export default function DeleteButton({ id }: { id: number }) {
  
  const { handleDeleteTodo } = useTodosContext();

  return <button onClick={() => handleDeleteTodo(id)}>❌</button>;
}
