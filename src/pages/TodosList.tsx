import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { ImRadioChecked } from 'react-icons/im';
import { ImRadioChecked2 } from 'react-icons/im';

import { useActions } from '../customHooks/useActions';
import { useTypeSelector } from '../customHooks/useTypeSelector';


const TOTAL_ITEMS = 200;
const START_PAGE = 1;

const TodosList: React.FC = () => {
  const { todos, page, limit, loading, error } = useTypeSelector(
    (state) => state.todos
  );

  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  const pages = Array.from(
    { length: Math.ceil(TOTAL_ITEMS / limit) - 1 },
    (x, i) => i + START_PAGE
  );

  const tableHeader = [
    { id: uuidv4(), value: 'User Id' },
    { id: uuidv4(), value: 'Todo Id' },
    { id: uuidv4(), value: 'Todo Title' },
    { id: uuidv4(), value: 'Completed' },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className='m-4 text-xl  text-center font-bold tracking-tight leading-none text-gray-900 md:text-2xl dark:text-white'>
        Todos List
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
                        {todos.map((todo) => (
                          <tr className='bg-gray-100 border-b' key={uuidv4()}>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                              {todo.userId}
                            </td>
                            <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                              {todo.id}
                            </td>
                            <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                              {todo.title}
                            </td>
                            <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                              {todo.completed && (
                                <ImRadioChecked color={'green'} />
                              )}
                              {!todo.completed && (
                                <ImRadioChecked2 color={'red'} />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='max-w-2xl mx-auto m-8'>
            <nav aria-label='Page navigation example'>
              <ul className='inline-flex -space-x-px'>
                {pages.map((p) => (
                  <li key={uuidv4()} onClick={() => setTodoPage(p)}>
                    <span
                      className={clsx(
                        'bg-white border border-gray-300 cursor-pointer leading-tight py-2 px-3',
                        'hover:bg-gray-100 hover:text-gray-700',
                        { 'bg-blue-100': p === page }
                      )}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default TodosList;
