import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useActions } from '../customHooks/useActions';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import TodoItem from './TodoItem';
import Input from './Input';

const PersonalTodos = () => {
  const [todo, setTodo] = useState({
    userId: 123,
    id: 2344,
    title: '',
    completed: false,
  });

  const { yourTodos, page, limit, loading, error } = useTypeSelector(
    (state) => state.todos
  );

  const { createTodo } = useActions();

  const addTask = () => {
    createTodo(todo);
    setTodo(prevState => ({...prevState, text: ""}));
  };

  const handleInput =(text: string)=> {
    setTodo((prevState) => ({ ...prevState, text: text }));
  }

  return (
    <div>
      <h2 className='m-4 text-xl  text-center font-bold tracking-tight leading-none text-gray-900 md:text-2xl dark:text-white'>
        Personal Todo List
      </h2>
      <Input
        text={todo.title}
        handleSubmit={addTask}
        handleInput={handleInput}
      />
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          createTodo({
            userId: 1213,
            id: 123243534,
            title: 'Its work',
            completed: false,
          });
        }}
      >
        Create todo
      </button> */}
      <div className='container mx-auto'>
        <div className='flex flex-col'>
          <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
            <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='overflow-hidden'>
                <table className='min-w-full'>
                  {yourTodos.map((todo) => (
                    <TodoItem
                      userId={987}
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
