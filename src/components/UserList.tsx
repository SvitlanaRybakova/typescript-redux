import React from 'react';
import { useTypeSelector } from '../customHooks/useTypeSelector';

const UserList: React.FC = () => {
  const {users, loading, error} = useTypeSelector((state) => state.user);
  return <div></div>;
};

export default UserList;
