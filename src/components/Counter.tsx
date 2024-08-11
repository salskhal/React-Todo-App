import { useTodosContext } from "../lib/hooks";

export default function Counter() {
  const { totalCount, completedCount } = useTodosContext();

  return (
    <button className="text-lg ">
      {completedCount} / {totalCount} completed
    </button>
  );
}
