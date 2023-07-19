import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useActions } from '../customHooks/useActions';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import TodoItem from '../components/TodoItem';
import Pagination from '../components/Pagination';
import { ITodo } from '../types/todo';
import PersonalTodos from '../components/PersonalTodos';

const TOTAL_ITEMS = 200;
const START_PAGE = 1;

const TodosList: React.FC = () => {
  const { todos, page, limit, loading, error } = useTypeSelector(
    (state) => state.todos
  );

  const { fetchTodos, setTodoPage, createTodo } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  const pages: Array<number> = Array.from(
    { length: Math.ceil(TOTAL_ITEMS / limit) - 1 },
    (x, i) => i + START_PAGE
  );

  interface ITableHeader {
    id: string;
    value: string;
  }

  const tableHeader: ITableHeader[] = [
    { id: uuidv4(), value: 'User Id' },
    { id: uuidv4(), value: 'Todo Id' },
    { id: uuidv4(), value: 'Todo Title' },
    { id: uuidv4(), value: 'Completed' },
  ];

  if (error) return <Error errorText={error} />;
  if (loading) return <Spinner />;

  return (
    <div>
      <PersonalTodos />
      <h2 className='m-4 text-xl  text-center font-bold tracking-tight leading-none text-gray-900 md:text-2xl dark:text-white'>
        Others Todos List
      </h2>

      {todos.length > 0 && (
        <>
          <div className='container mx-auto'>
            <div className='flex flex-col'>
              <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
                <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                  <div className='overflow-hidden'>
                    <table className='min-w-full'>
                      <thead className='bg-white border-b'>
                        <tr>
                          {tableHeader.map((header) => (
                            <th
                              key={header.id}
                              scope='col'
                              className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                            >
                              {header.value}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {todos.map((todo: ITodo) => (
                          <TodoItem
                            key={uuidv4()}
                            userId={todo.userId}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Pagination
            pages={pages}
            setTodoPage={setTodoPage}
            currentPage={page}
          />
        </>
      )}
    </div>
  );
};

export default TodosList;
