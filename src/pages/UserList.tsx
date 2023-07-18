import React, { useEffect } from 'react';


import { useTypeSelector } from '../customHooks/useTypeSelector';
import { useActions } from '../customHooks/useActions';

import Spinner from '../components/Spinner';
import Error from '../components/Error';
import { IUser } from '../types/user';
import UserItem from '../components/UserItem';

const UserList: React.FC = () => {
 
  const { users, loading, error } = useTypeSelector((state) => state.user);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) return <Error errorText={error} />;
  if (loading) return <Spinner />;
  
  return (
    <>
      <h2 className='m-4 text-xl  text-center font-bold tracking-tight leading-none text-gray-900 md:text-2xl dark:text-white'>
        User List
      </h2>
      <div className='container mx-auto'>
        <ul style={{ borderBottom: '1px solid #80808057' }} role='list'>
          {users.length > 0 &&
            users.map((user: IUser) => (
              <UserItem
                id={user.id}
                name={user.name}
                email={user.email}
                company={user.company}
                website={user.website}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
