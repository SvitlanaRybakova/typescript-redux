import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserList from './pages/UserList';
import UserPage from './pages/UserPage';
import Todos from './pages/Todos';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/' element={<UserList />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
      
    </>
  );
}

export default App;
