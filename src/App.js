import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';
import WelcomeAdmin from './Pages/WelcomeAdmin';
import NotFound from './Pages/NotFound';
import AdminCategory from './Pages/AdminCategory';
import Category from './Pages/Category';
import Product from './Pages/Product';
import HelpCenter from './Pages/HelpCenter';
import ComingSoon from './Pages/ComingSoon'

import Auth from './utils/Auth';
import AuthAdmin from './utils/AuthAdmin';
import PushUser from './utils/PushUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Route>
        <Route element={<AuthAdmin />}>
          <Route path="/admin" element={<AdminCategory />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/push-user" element={<PushUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
