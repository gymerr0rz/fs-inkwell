import { React } from 'react';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  AuthBox,
  AuthInputs,
  AuthBtn,
} from '../../styles/Auth.styled';

const RegisterPage = () => {
  function onFormSubmit(e) {
    e.preventDefault();
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
          <form id="login" onSubmit={onFormSubmit}>
            <div className="labels" onClick={onClick}>
              <label for="email">EMAIL</label>
              <AuthInputs type="text" placeholder="john@example.com" />
            </div>
            <div className="labels" onClick={onClick}>
              <label for="username">USERNAME</label>
              <AuthInputs type="text" placeholder="john1234" />
            </div>
            <div className="labels" onClick={onClick}>
              <label for="password">PASSWORD</label>
              <AuthInputs type="text" placeholder="password123" />
            </div>
            <AuthBtn type="submit" value="LOG IN" />
          </form>
          <p>
            Already have an account?
            <b>
              <Link to="/auth/login"> Login!</Link>
            </b>
          </p>
        </AuthBox>
      </AuthContainer>
    </>
  );
};

export default RegisterPage;
