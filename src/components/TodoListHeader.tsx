import Counter from "./Counter";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function TodoListHeader() {
  let userName = "Guest";

  const { user, isAuthenticated, isLoading } = useKindeAuth();

  if (isAuthenticated && !isLoading) {
    userName = user?.given_name || "User";
  }
  return (
    <header className="mb-4 rounded-e-xl overflow-hidden flex p-4 items-center justify-between ">
      <h1 className="text-2xl font-bold">Welcome, {userName}</h1>
      <Counter />
    </header>
  );
}
