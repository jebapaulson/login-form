import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 
const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box className="home-page">
      {isAuthenticated ? (
        <Box className="welcome-container">
          <h2 className="welcome-text">
            Welcome, {user?.username || 'Admin'}!
          </h2>
          <p>This is your dashboard. You can add more functionality here.</p>
        </Box>
      ) : (
        <Box className="unauthenticated-container">
          <h1>Home Page</h1>
          <h2>You are not logged in!</h2>
          <p>Please log in to access your dashboard.</p>
          <Button
            onClick={() => navigate('/')}
            className="wave-button"
          >
            Go to Login <span className="arrow">→</span>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
