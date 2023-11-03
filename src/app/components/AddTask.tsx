'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { addTodo } from '@/api';
import { nanoid } from 'nanoid';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTodo({ id: nanoid(), text: taskTitle });

    setTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='mb-4 space-y-3'>
      <input
        type='text'
        value={taskTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
        className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400'
      />
      <button className='w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200'>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
