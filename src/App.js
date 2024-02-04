import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './Pages/Login';
import Home from './Pages/Home';
import AdminCategory from './Pages/AdminCategory';
import NotFound from './Pages/NotFound';

function App() {
  const isAdmin = (localStorage.getItem('role') === 'admin') ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminCategory />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
