import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  NavbarContainerProps,
  NavOpen,
  NavFixed,
  NavClosed,
  NavNoFixed,
  NavLogo,
  NavbarInnerContainer,
  NavLinks,
} from '../../styles/navbar/Navbar.styled';
import NavButton from './buttons/NavButton';
import { ChevronRight } from 'lucide-react';
import User from '../user/User';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  if (!navbar)
    return (
      <>
        <NavNoFixed>
          <NavOpen onClick={() => setNavbar(true)}>
            <ChevronRight fill="white" strokeWidth="0" />
          </NavOpen>
          <NavbarContainer>
            <NavbarInnerContainer>
              <NavLogo>
                <h1>Inkwell</h1>
                <p>Workspace</p>
                <NavLinks>
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

  if (navbar)
    return (
      <>
        <NavFixed>
          <NavClosed onClick={() => setNavbar(false)}>
            <ChevronRight fill="white" />
          </NavClosed>
          <NavbarContainerProps>
            <div>
              <Link to="/app/tasks">
                <NavButton icon="Check" />
              </Link>
              <Link to="/app/notes">
                <NavButton icon="Book" />
              </Link>
              <Link to="/app/administration">
                <NavButton icon="User" />
              </Link>
            </div>
          </NavbarContainerProps>
        </NavFixed>
      </>
    );
};

export default Navbar;
