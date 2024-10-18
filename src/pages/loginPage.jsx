import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Box, Alert } from '@mui/material';
import { login } from '../components/authService/authService'; 
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', formData.email);

      navigate ('/contacts');
      setError(''); 
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ maxWidth: 400, padding: 4, borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Login
            </Button>

            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={() => navigate('/')} 
            >
              Back
            </Button>

          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
