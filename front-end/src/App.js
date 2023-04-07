import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import React from 'react';
import RegisterPage from './pages/auth/Register';
import MainPage from './pages/Main';
import NotesPage from './pages/app/NotesPage';
import { RequireAuth } from 'react-auth-kit';
import AdministrationPage from './pages/app/AdministrationPage';
import TasksPage from './pages/app/TasksPage';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/app/HomePage';
import FriendsPage from './pages/app/FriendsPage';
import UsersPage from './pages/app/UsersPage';
import UsersId from './pages/app/UsersId';

function App() {
  const location = useLocation();

  // Check if the current location is on one of the desired paths
  const isOnAppPage =
    location.pathname.startsWith('/app/') ||
    location.pathname.startsWith('/app');

  return (
    <>
      {isOnAppPage && <Navbar />}
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
        <Route
          path="/app/friends"
          element={
            <RequireAuth loginPath="/auth/login">
              <FriendsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/app/users"
          element={
            <RequireAuth loginPath="/auth/login">
              <UsersPage />
            </RequireAuth>
          }
        />
        <Route
          path="/app/users/:id"
          element={
            <RequireAuth loginPath="/auth/login">
              <UsersId />
            </RequireAuth>
          }
        />
        <Route
          path="/app/"
          element={
            <RequireAuth loginPath="/auth/login">
              <HomePage />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
