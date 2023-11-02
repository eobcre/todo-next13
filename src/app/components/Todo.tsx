import React from 'react';
import { Task } from '@/types';

type TodoProps = {
  todo: Task;
};

const Todo = ({ todo }: TodoProps) => {
  return (
    <div>
      <li
        key={todo.id}
        className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'
      >
        <span>{todo.text}</span>
        <div>
          <button className='text-green-500 mr-3'>Edit</button>
          <button className='text-red-500'>Delete</button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
