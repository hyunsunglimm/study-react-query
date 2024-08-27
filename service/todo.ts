import { ResponseTodo } from "@/types/todo";

export const fetchTodoList = async (): Promise<ResponseTodo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();
  return data;
};
