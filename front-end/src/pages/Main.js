import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/Buttons,styled';
import { MainPageStyle } from '../styles/Main.styled';

const MainPage = () => {
  return (
    <>
      <MainPageStyle>
        <h1>INKWELL</h1>
        <p>Log in with your INKWELL account to continue.</p>
        <div>
          <Link to="/auth/register">
            <StyledButton>Register</StyledButton>
          </Link>
          <Link to="/auth/login">
            <StyledButton>Log in</StyledButton>
          </Link>
        </div>
      </MainPageStyle>
    </>
  );
};

export default MainPage;
