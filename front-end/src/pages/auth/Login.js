import React from 'react';
import {
  AuthContainer,
  AuthBox,
  AuthInputs,
  AuthBtn,
} from '../../styles/Auth.styled';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  function onFormSubmit(e) {
    e.preventDefault();
    axios.post();
  }

  function onClick(e) {
    const target = e.currentTarget;
    target.querySelector('input').focus();
  }

  return (
    <>
      <AuthContainer>
        <AuthBox>
          <h1>INKWELL</h1>
          <p>
            Organize your life, boost your productivity - all with our notes and
            Pomodoro app!
          </p>
          <form
            action="/login"
            method="post"
            id="login"
            onSubmit={onFormSubmit}
          >
            <div className="labels" onClick={onClick}>
              <label for="email">EMAIL</label>
              <AuthInputs type="text" placeholder="john@example.com" />
            </div>
            <div className="labels" onClick={onClick}>
              <label for="password">PASSWORD</label>
              <AuthInputs type="text" placeholder="password" />
            </div>
            <AuthBtn type="submit" value="LOG IN" />
          </form>
          <p>
            Don’t have an account?
            <b>
              <Link to="/auth/register"> Register!</Link>
            </b>
          </p>
        </AuthBox>
      </AuthContainer>
    </>
  );
};

export default LoginPage;
