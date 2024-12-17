import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../app/reducer/authSlice';
import { Box, Typography, TextField, InputAdornment, Button } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import './LoginPage.css'; 

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
    if (!isAuthenticated) {
      navigate('/home');
    }
  };

  return (
    <Box className="login-page">
      <Box className="login-form-container">
        <Typography variant="h4" className="login-header">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <Typography>Username:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="ep:user" width="20" height="20" />
                  </InputAdornment>
                ),
              }}
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters',
                },
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </Box>
          <Box mb={2}>
            <Typography>Password:</Typography>
            <TextField
              type="password"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="mdi:lock" width="20" height="20" />
                  </InputAdornment>
                ),
              }}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
