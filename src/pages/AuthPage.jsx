import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

const AuthPage = ({ title, handleSubmit }) => {
  const theme = useTheme();

  return (
    <AppProvider theme={theme}>
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
              {title}
            </Typography>
            <SignInPage signIn={handleSubmit} providers={providers} />
          </CardContent>
        </Card>
      </Box>
    </AppProvider>
  );
};

export default AuthPage;
