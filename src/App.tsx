import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserList from './pages/UserList';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/' element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
