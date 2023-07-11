import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import { fetchUsers } from '../store/action-creators/fetchUsers';

const UserList: React.FC = () => {
  const { users, loading, error } = useTypeSelector((state) => state.user);
  const dispatch = useDispatch();

  if (users) console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {loading && <div>loading</div>}
      {error && <div>{error}</div>}
      {users.length > 0 &&
        users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

export default UserList;
