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
  SearchDiv,
  SearchIcons,
} from '../../styles/navbar/Navbar.styled';
import NavButton from './buttons/NavButton';
import { ChevronRight, Search } from 'lucide-react';
import User from '../user/User';
import axios from 'axios';
import ShowUsers from './showusers/ShowUsers';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [users, setUsers] = useState([]);

  function currentButton(code) {
    const navbarButtons = {
      Home: 'app',
      Tasks: 'apptasks',
      Notes: 'appnotes',
      Settings: 'appsettings',
      Friends: 'appfriends',
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

  const handleSearch = (e) => {
    const user = e.target.value;
    // console.log(users);
    if (user.length > 0) {
      axios
        .get('https://inkwell.onrender.com/user/getUser/' + user)
        .then((response) => {
          if (response.data.length > 0) {
            setUsers([...response.data]);
          }
        });
    } else {
      setUsers([]);
    }
  };

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
                <SearchDiv>
                  <SearchIcons>
                    <input
                      type="text"
                      placeholder="Find users..."
                      onChange={(e) => handleSearch(e)}
                    />
                    <Search color="#fff" />
                  </SearchIcons>
                  {users.length !== 0 ? (
                    <ShowUsers users={users} />
                  ) : (
                    console.log('Error')
                  )}
                </SearchDiv>
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
                  <Link to="/app/friends">
                    <NavButton icon="Users" name="Friends" />
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
            {/* <User /> */}
          </NavbarContainerProps>
        </NavFixed>
      </>
    );
};

export default Navbar;
