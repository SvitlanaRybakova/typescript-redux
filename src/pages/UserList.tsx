import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import { fetchUsers } from '../store/action-creators/fetchAllUsers';
import { useNavigate } from 'react-router-dom';

import noImage from '../assets/noImage.png';

const UserList: React.FC = () => {
  let navigate = useNavigate();
  const { users, loading, error } = useTypeSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h2 className='m-4 text-xl  text-center font-bold tracking-tight leading-none text-gray-900 md:text-2xl dark:text-white'>
        User List
      </h2>
      <div className='container mx-auto'>
        {loading && <div>loading</div>}
        {error && <div>{error}</div>}
        <ul style={{ borderBottom: '1px solid #80808057' }} role='list'>
          {users.length > 0 &&
            users.map((user) => (
              <li
                key={user.id}
                onClick={() => navigate(`/users/${user.id}`)}
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
                      {user.name}
                    </p>
                    <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className='hidden sm:flex sm:flex-col sm:items-end'>
                  <p className='text-sm leading-6 text-gray-900'>
                    <em className=''>Company:</em> {user.company.name}
                  </p>
                  <p className='mt-1 text-xs leading-5 text-gray-500'>
                    {user.website}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
