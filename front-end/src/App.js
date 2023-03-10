import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import React from 'react';
import RegisterPage from './pages/auth/Register';
import MainPage from './pages/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
