import { NavbarButton } from '../../../styles/navbar/Navbar.styled';
import * as icons from 'lucide-react';

const Icon = ({ name }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color="black" size={24} />;
};

const NavButton = (props) => {
  return (
    <NavbarButton>
      {Icon({ name: props.icon })}
      {props.name}
    </NavbarButton>
  );
};

export default NavButton;
