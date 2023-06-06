import React, { useState} from 'react';
import Button from '@mui/material/Button';
import Login from './loginPage';

const LoginButton = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => {
    setShowLogin(true);
  };

  return (
    <>
      <Button variant="inherit" onClick={handleClick}>
        Login
      </Button>
      {showLogin && <Login />}
    </>
  );
};

export default LoginButton;