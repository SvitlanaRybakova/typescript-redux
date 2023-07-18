import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IUser } from '../types/user';
import noImage from '../assets/noImage.png';

const UserItem: FC<IUser> = ({ id, name, email, company, website }) => {
   let navigate = useNavigate();
  return (
    <li
      key={id}
      onClick={() => navigate(`/users/${id}`)}
      className='flex justify-between gap-x-6 p-5 cursor-pointer hover:bg-[#d0d0d0ad]'
    >
      <div className='flex gap-x-4'>
        <img
          className='h-12 w-12 flex-none rounded-full bg-gray-50'
          src={noImage}
          alt='image is not available'
        />
        <div className='min-w-0 flex-auto'>
          <p className='text-sm font-semibold leading-6 text-gray-900'>
            {name}
          </p>
          <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
            {email}
          </p>
        </div>
      </div>

      <div className='hidden sm:flex sm:flex-col sm:items-end'>
        <p className='text-sm leading-6 text-gray-900'>
          <em className=''>Company:</em> {company.name}
        </p>
        <p className='mt-1 text-xs leading-5 text-gray-500'>{website}</p>
      </div>
    </li>
  );
};

export default UserItem;
