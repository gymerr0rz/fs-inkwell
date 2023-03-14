import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import React from 'react';
import RegisterPage from './pages/auth/Register';
import MainPage from './pages/Main';
import NotesPage from './pages/app/NotesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/app/notes" element={<NotesPage />} />
      </Routes>
    </>
  );
}

export default App;
