import { Task } from './types';

const endpoint = 'http://localhost:3001/tasks';

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(endpoint, {
    cache: 'no-store',
  });
  const todos = res.json();

  return todos;
};

// todo add API
export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();

  return newTodo;
};
