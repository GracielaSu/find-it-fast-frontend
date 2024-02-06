import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './NotFound.css';

const WelcomeAdmin = () => {
  const [isRoute, setIsRoute] = useState(false);

  const handleClick = () => {
    setIsRoute(true)
  };

  if (isRoute) {
    return <Navigate to="/admin/category" />;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" id="main-container">
        <div className="h3">WelcomeAdmin</div>
        <button type="button" onClick={handleClick} class="btn btn-primary">Login</button>
      </div>
    </>
  );
}

export default WelcomeAdmin;

