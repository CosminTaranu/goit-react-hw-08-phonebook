
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/userMenu';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav>
      <Link to="/contacts">Contacts</Link>
      {isLoggedIn ? <UserMenu /> : <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>}
    </nav>
  );
};

export default Navigation;
