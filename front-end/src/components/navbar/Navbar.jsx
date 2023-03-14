import { Plus } from 'lucide-react';
import { NavbarContainer } from '../../styles/navbar/Navbar.styled';
import NavButton from './buttons/NavButton';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <div>
          <h1>Inkwell</h1>
          <p>Workspace</p>
          <button>
            <Plus color="black" size={20} /> NEW NOTE
          </button>
          <div>
            <NavButton name="Dashboard" icon="Plus" />
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
