import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const isAdmin = (localStorage.getItem('role') === 'admin') ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
