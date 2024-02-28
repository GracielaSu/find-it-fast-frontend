import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ text, route, custom_class, logo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route, { replace: true });
  };

  return (
    <button onClick={handleClick} className={custom_class}>
      {text}
      {logo}
    </button>
  );
};

export default NavigateButton;
