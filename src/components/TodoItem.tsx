import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ImRadioChecked } from 'react-icons/im';
import { ImRadioChecked2 } from 'react-icons/im';

import { ITodo } from '../types/todo';

const TodoItem: FC<ITodo> = ({ userId, id, completed, title }) => {
  return (
    <tr className='bg-gray-100 border-b' key={uuidv4()}>
      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
        {userId}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {id}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {title}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {completed && <ImRadioChecked color={'green'} />}
        {!completed && <ImRadioChecked2 color={'red'} />}
      </td>
    </tr>
  );
};

export default TodoItem;
