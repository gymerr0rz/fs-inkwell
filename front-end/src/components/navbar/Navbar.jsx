import { Link } from 'react-router-dom';
import { NavbarContainer } from '../../styles/navbar/Navbar.styled';
import NavButton from './buttons/NavButton';
import NoteButton from './buttons/NoteButton';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <div>
          <h1>Inkwell</h1>
          <p>Workspace</p>
          <NoteButton />
          <div>
            <Link to="/app/dashboard">
              <NavButton name="Dashboard" icon="Home" />
            </Link>
            <Link to="/app/chat">
              <NavButton name="Chat" icon="Mail" />
            </Link>
            <Link to="/app/teams">
              <NavButton name="Teams" icon="Users" />
            </Link>
            <Link to="/app/tasks">
              <NavButton name="Tasks" icon="Check" />
            </Link>
            <Link to="/app/notes">
              <NavButton name="Notes" icon="Book" />
            </Link>
            <Link to="/app/administration">
              <NavButton name="Administration" icon="User" />
            </Link>
          </div>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
