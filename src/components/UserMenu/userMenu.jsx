import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    
    navigate('/login');
  };

  return (
    <div>
      <p>{localStorage.getItem('email')}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
