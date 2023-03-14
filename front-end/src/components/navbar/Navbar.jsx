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
            <NavButton name="Dashboard" icon="Home" />
            <NavButton name="Chat" icon="Mail" />
            <NavButton name="Teams" icon="Users" />
            <NavButton name="Tasks" icon="Check" />
            <NavButton name="Notes" icon="Book" />
            <NavButton name="Administration" icon="User" />
          </div>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
