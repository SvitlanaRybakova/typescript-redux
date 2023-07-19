import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useActions } from '../customHooks/useActions';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import TodoItem from './TodoItem';
import Input from './Input';

const PersonalTodos = () => {
  const [todo, setTodo] = useState('');

  const { yourTodos, page, limit, loading, error } = useTypeSelector(
    (state) => state.todos
  );

  const { createTodo } = useActions();

  const addTask = () => {
   
    createTodo({
      userId: 123,
      id: uuidv4().slice(0, 3),
      title: todo,
      completed: false,
    });
    setTodo('');
  };

  const handleInput = (text: string) => {
    setTodo(text);
  };

  return (
    <div>
      <h2 className='m-4 text-xl  text-center font-bold tracking-tight leading-none text-gray-900 md:text-2xl dark:text-white'>
        Personal Todo List
      </h2>
      <Input text={todo} addTask={addTask} handleInput={handleInput} />

      <div className='container mx-auto'>
        <div className='flex flex-col'>
          <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
            <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='overflow-hidden'>
                <table className='min-w-full'>
                  {yourTodos.map((todo) => (
                    <TodoItem
                      userId={todo.userId}
                      id={todo.id}
                      completed={todo.completed}
                      title={todo.title}
                    />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTodos;
