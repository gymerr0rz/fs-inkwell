import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import React from 'react';
import RegisterPage from './pages/auth/Register';
import MainPage from './pages/Main';
import NotesPage from './pages/app/NotesPage';
import { RequireAuth } from 'react-auth-kit';
import DashboardPage from './pages/app/DashboardPage';
import ChatPage from './pages/app/ChatPage';
import TeamsPage from './pages/app/TeamsPage';
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
          path="/app/dashboard"
          element={
            <RequireAuth loginPath="/auth/login">
              <DashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/app/chat"
          element={
            <RequireAuth loginPath="/auth/login">
              <ChatPage />
            </RequireAuth>
          }
        />
        <Route
          path="/app/teams"
          element={
            <RequireAuth loginPath="/auth/login">
              <TeamsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/app/administration"
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
