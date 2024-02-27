import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route, { replace: true });
  };

  return (
    <button onClick={handleClick} className="btn login-btn p-3 mt-5 d-block h3 login-h3 rounded text-white w-75">
      {text}
    </button>
  );
};

export default NavigateButton;
