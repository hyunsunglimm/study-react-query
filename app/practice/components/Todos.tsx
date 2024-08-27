"use client";

import { fetchTodoList } from "@/service/todo";
import { useQuery } from "@tanstack/react-query";

export default function Todos() {
  const {
    isError,
    data: todos,
    error,
    isFetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
    enabled: false,
  });

  return (
    <div>
      <button onClick={() => refetch()}>Fetch Todos</button>

      {todos ? (
        <>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : (
        <span>Not ready ...</span>
      )}

      <div>{isFetching ? "Fetching..." : null}</div>
    </div>
  );
}
