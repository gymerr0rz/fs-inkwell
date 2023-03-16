import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  NavbarContainerProps,
  NavOpen,
  NavFixed,
  NavClosed,
} from '../../styles/navbar/Navbar.styled';
import NavButton from './buttons/NavButton';
import NoteButton from './buttons/NoteButton';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  if (!navbar)
    return (
      <>
        <NavFixed>
          <NavOpen onClick={() => setNavbar(true)}>
            <ChevronRight fill="white" />
          </NavOpen>
          <NavbarContainer>
            <div>
              <h1>Inkwell</h1>
              <p>Workspace</p>
              <NoteButton name="ADD NOTE" />
              <Link to="/app">
                <NavButton icon="Home" name="Dashboard" />
              </Link>
              <Link to="/app/chat">
                <NavButton icon="Mail" name="Chat" />
              </Link>
              <Link to="/app/teams">
                <NavButton icon="Users" name="Teams" />
              </Link>
              <Link to="/app/tasks">
                <NavButton icon="Check" name="Tasks" />
              </Link>
              <Link to="/app/notes">
                <NavButton icon="Book" name="Notes" />
              </Link>
              <Link to="/app/administration">
                <NavButton icon="User" name="Administration" />
              </Link>
            </div>
          </NavbarContainer>
        </NavFixed>
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
              <NoteButton show={true} />
              <Link to="/app">
                <NavButton icon="Home" />
              </Link>
              <Link to="/app/chat">
                <NavButton icon="Mail" />
              </Link>
              <Link to="/app/teams">
                <NavButton icon="Users" />
              </Link>
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
