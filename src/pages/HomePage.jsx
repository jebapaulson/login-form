import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/'); 
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user?.username || 'User'}!</h2>
          <p>This is your dashboard. You can add more functionality here.</p>
        </div>
      ) : (
        <div>
            <h1>Home Page</h1>
          <h2>You are not logged in!</h2>
          <button onClick={() => navigate('/')}>Go to Login</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
