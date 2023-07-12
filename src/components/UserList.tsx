import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import { fetchUsers } from '../store/action-creators/fetchUsers';

const UserList: React.FC = () => {
  const { users, loading, error } = useTypeSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className='container mx-auto'>
      {loading && <div>loading</div>}
      {error && <div>{error}</div>}
      {users.length > 0 &&
        users.map((user) => (
          <ul
            style={{ borderBottom: '1px solid #80808057' }}
            role='list'
            className='cursor-pointer hover:bg-[#d0d0d0ad]'
            key={user.id}
          >
            <li className='flex justify-between gap-x-6 p-5'>
              <div className='flex gap-x-4'>
                <img
                  className='h-12 w-12 flex-none rounded-full bg-gray-50'
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
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
          </ul>
        ))}
    </div>
  );
};

export default UserList;
