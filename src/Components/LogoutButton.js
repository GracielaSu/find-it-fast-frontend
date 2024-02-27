import React, { useState } from 'react';
import axios from 'axios';

const LogoutButton = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await axios.post('http://localhost:8000/api/auth/logout', null, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      localStorage.removeItem('token');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setIsLoggingOut(false);
      window.location.reload(); // Reload the page to clear any cached data
    }
  };

  return (
    <button onClick={handleLogout} disabled={isLoggingOut} class="dropdown-item h6">
      {isLoggingOut ? 'Logging out...' : 'Logout'}
    </button>
  );
};

export default LogoutButton;
