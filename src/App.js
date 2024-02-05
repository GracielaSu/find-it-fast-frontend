import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';
import WelcomeAdmin from './Pages/WelcomeAdmin';
import NotFound from './Pages/NotFound';

import Auth from './utils/Auth';
import AuthAdmin from './utils/AuthAdmin';
import PushUser from './utils/PushUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<AuthAdmin />}>
          <Route path="/admin" element={
            <Routes>
              <Route path="/" element={<WelcomeAdmin />} />
            </Routes>
          } />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/push-user" element={<PushUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
