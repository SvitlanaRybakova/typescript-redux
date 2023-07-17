import React, { FC } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { TodoAction } from '../types/todo';

interface PaginationProps {
  pages: Array<number>;
  currentPage: number;
  setTodoPage: (page: number) => TodoAction;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  pages,
  setTodoPage,
}) => {
  return (
    <div className='max-w-2xl mx-auto m-8'>
      <nav aria-label='Page navigation example'>
        <ul className='inline-flex -space-x-px'>
          {pages.map((p) => (
            <li key={uuidv4()} onClick={() => setTodoPage(p)}>
              <span
                className={clsx(
                  'bg-white border border-gray-300 cursor-pointer leading-tight py-2 px-3',
                  'hover:bg-gray-100 hover:text-gray-700',
                  { 'bg-[#1d4eda52]': p === currentPage }
                )}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
