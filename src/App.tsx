import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserList from './pages/UserList';
import UserPage from './pages/UserPage';
import TodosList from './pages/TodosList';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/' element={<UserList />} />
        <Route path='/todos' element={<TodosList />} />
      </Routes>
      
    </>
  );
}

export default App;
