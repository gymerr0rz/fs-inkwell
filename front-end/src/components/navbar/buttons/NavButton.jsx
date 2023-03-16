import {
  NavbarButton,
  NavbarNoProps,
} from '../../../styles/navbar/Navbar.styled';
import * as icons from 'lucide-react';

const Icon = ({ name }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color="white" size={24} />;
};

const NavButton = (props) => {
  if (props.name) {
    return (
      <NavbarButton>
        {Icon({ name: props.icon })}
        {props?.name}
      </NavbarButton>
    );
  }

  return <NavbarNoProps>{Icon({ name: props.icon })}</NavbarNoProps>;
};

export default NavButton;
