import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  NavbarContainerProps,
  NavOpen,
  NavFixed,
  NavClosed,
  NavNoFixed,
} from '../../styles/navbar/Navbar.styled';
import NavButton from './buttons/NavButton';
import NoteButton from './buttons/NoteButton';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [name, setName] = useState(null);

  useEffect(() => {
    let url = window.location.pathname;
    const pathname = url.split('/app/').join('');
    setName(pathname.toUpperCase());
  }, []);

  if (!navbar)
    return (
      <>
        <NavNoFixed>
          <NavOpen onClick={() => setNavbar(true)}>
            <ChevronRight fill="white" strokeWidth="0" />
          </NavOpen>
          <NavbarContainer>
            <div>
              <h1>Inkwell</h1>
              <p>Workspace</p>
              <NoteButton name={`ADD ${name}`} />
              <Link to="/app/tasks">
                <NavButton icon="Check" name="Tasks" />
              </Link>
              <Link to="/app/notes">
                <NavButton icon="Book" name="Notes" />
              </Link>
              <Link to="/app/settings">
                <NavButton icon="Settings" name="Settings" />
              </Link>
            </div>
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
              <NoteButton show={true} />
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
