import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { register } from '../components/authService/authService'; 

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
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
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      const response = await register(dataToSend);

  
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', formData.email);

      navigate ('/login')
      setError('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); 
      } else {
        setError('Registration failed'); 
      }
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
            Register
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
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
            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
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
              Register
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

export default RegisterPage;
