import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import React from 'react';
import RegisterPage from './pages/auth/Register';
import MainPage from './pages/Main';
import NotesPage from './pages/app/NotesPage';
import { RequireAuth } from 'react-auth-kit';
import AdministrationPage from './pages/app/AdministrationPage';
import TasksPage from './pages/app/TasksPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route
          path="/app/notes"
          element={
            <RequireAuth loginPath="/auth/login">
              <NotesPage />
            </RequireAuth>
          }
        />
        <Route
          path="/app/tasks"
          element={
            <RequireAuth loginPath="/auth/login">
              <TasksPage />
            </RequireAuth>
          }
        />

        <Route
          path="/app/settings"
          element={
            <RequireAuth loginPath="/auth/login">
              <AdministrationPage />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
