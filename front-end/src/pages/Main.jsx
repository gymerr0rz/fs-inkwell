import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/Buttons,styled';
import {
  MainPageStyle,
  HomeNavbar,
  Container,
  Hero,
  HeroTwo,
  HeroButtons,
  Flex,
} from '../styles/Main.styled';
import Book from '../assets/undraw_design_notes_re_eklr.svg';

const MainPage = () => {
  return (
    <>
      <Container>
        <MainPageStyle>
          <HomeNavbar>
            <h1>INKWELL</h1>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>
                <button>Log in</button>
              </li>
            </ul>
          </HomeNavbar>
          <Hero>
            <h1>Unleashing your creativity, one idea at a time.</h1>
            <p>
              Social productivity that puts you back in control. Connect,
              create, and collaborate with like-minded individuals in a safe and
              private environment. Join us and experience a new kind of social
              media.
            </p>
            <HeroButtons>
              <button className="login">Log in</button>
              <button className="register">Create account</button>
            </HeroButtons>
          </Hero>
        </MainPageStyle>
      </Container>

      {/* Second Hero */}
      <Container>
        <MainPageStyle>
          <HeroTwo>
            <Flex>
              <h1>Everything you need all in one application</h1>
              <p>
                Inkwell is your all-in-one productivity application. With
                features like note-taking, task management, and the Pomodoro
                technique, Inkwell simplifies your workflow and boosts your
                productivity. Say goodbye to juggling multiple apps and hello to
                a streamlined experience that helps you stay focused and achieve
                your goals.
              </p>
              <button className="register">Create account</button>
            </Flex>
            <img src={Book} alt="" />
          </HeroTwo>
        </MainPageStyle>
      </Container>
    </>
  );
};

export default MainPage;
