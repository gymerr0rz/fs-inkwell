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
        <Link to="/auth/register">
          <StyledButton>Register</StyledButton>
          <StyledButton>Log in</StyledButton>
        </Link>
      </MainPageStyle>
    </>
  );
};

export default MainPage;
