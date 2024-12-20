import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => (
  <Provider store={store}>
    <Router basename="/login-form">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
