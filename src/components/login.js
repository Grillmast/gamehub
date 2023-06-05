import React from 'react';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return <Button color="inherit" onClick={handleLogin}>Login</Button>;
};

export default LoginButton;
