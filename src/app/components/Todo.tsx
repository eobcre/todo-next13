'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Task } from '@/types';
import { editTodo, deleteTodo } from '@/api';

type TodoProps = {
  todo: Task;
};

const Todo = ({ todo }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

  const ref = useRef<HTMLInputElement>(null);

  // focus input when editing
  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  // edit
  const handleEdit = async () => {
    setIsEditing(true);
  };

  // save
  const handleSave = async () => {
    await editTodo(todo.id, editedTaskTitle);
    setIsEditing(false);
  };

  // delete
  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <div>
      <li
        key={todo.id}
        className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'
      >
        {isEditing ? (
          <input
            ref={ref}
            type='test'
            value={editedTaskTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditedTaskTitle(e.target.value)
            }
            className='mr-2 px-2 py-1 rounded border-gray-400 border'
          />
        ) : (
          <span>{todo.text}</span>
        )}
        <div>
          {isEditing ? (
            <button onClick={handleSave} className='text-blue-500 mr-3'>
              Save
            </button>
          ) : (
            <button onClick={handleEdit} className='text-green-500 mr-3'>
              Edit
            </button>
          )}
          <button onClick={handleDelete} className='text-red-500 mr-3'>
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
