import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  NavNoFixed,
  NavLogo,
  NavbarInnerContainer,
  NavLinks,
} from '../../styles/navbar/Navbar.styled';
import NavButton from './buttons/NavButton';
import User from '../user/User';
import Logo from '../../assets/logo/logo4.png';

const Navbar = () => {
  function currentButton(code) {
    const navbarButtons = {
      Home: 'app',
      Tasks: 'apptasks',
      Notes: 'appnotes',
      Settings: 'appsettings',
    };
    return navbarButtons[code] || null;
  }

  useEffect(() => {
    const page = window.location.pathname.split('/').join('');
    const buttons = document.querySelector('.navBtn').childNodes;
    buttons.forEach((btn) => {
      const target = btn.childNodes[0].innerText;
      const curr = currentButton(target);
      if (curr === page) {
        buttons.forEach((a) => {
          const b = a.childNodes[0];
          b.classList.remove('active');
        });
        btn.childNodes[0].classList.add('active');
      }
    });
  });

  return (
    <>
      <NavNoFixed>
        <NavbarContainer>
          <NavbarInnerContainer>
            <NavLogo>
              <img src={Logo} alt="" id="logo" />
              <h1>Inkwell</h1>
              <p>Workspace</p>
              <NavLinks className="navBtn">
                <Link to="/app">
                  <NavButton icon="Home" name="Home" />
                </Link>
                <Link to="/app/tasks">
                  <NavButton icon="Check" name="Tasks" />
                </Link>
                <Link to="/app/notes">
                  <NavButton icon="Book" name="Notes" />
                </Link>
                <Link to="/app/settings">
                  <NavButton icon="Settings" name="Settings" />
                </Link>
              </NavLinks>
            </NavLogo>
            <User />
          </NavbarInnerContainer>
        </NavbarContainer>
      </NavNoFixed>
    </>
  );
};

export default Navbar;
