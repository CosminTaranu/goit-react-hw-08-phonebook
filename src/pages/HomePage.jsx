import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#e0f7fa"
    >
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom>
          Welcome to Contact Book
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/register')}
          sx={{ marginRight: 2 }}
        >
          Register
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/login')}
          sx={{ marginRight: 2 }}
        >
          Login
        </Button>

        <Button
          variant="contained"
          color="third"
          onClick={() => navigate('/login')}
        >
          Contacts
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
