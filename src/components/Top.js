import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const Top = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/logout');
  };

  return (
    <div>
      <h1>Welcome to the Top Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Top;
