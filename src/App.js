import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Auth from './utils/Auth';
import ManagementHome from './Pages/ManagementHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route path="/admin" element={<ManagementHome />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
