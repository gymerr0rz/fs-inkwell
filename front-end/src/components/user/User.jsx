import { ChevronDown } from 'lucide-react';
import {
  UserContainer,
  UserImage,
  UserInformation,
  UserInfo,
  ImageContainer,
} from '../../styles/user/User.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import ShowOptions from './show_options/ShowOptions';

const User = () => {
  const [username, setUsername] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const header = useAuthHeader();

  const handleToggle = () => {
    setShowOptions(!showOptions);
  };

  const handleLeave = () => {
    setShowOptions(false);
  };

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('https://inkwell.onrender.com/user/getUser').then((user) => {
      setUsername(user.data.username);
      setDisplayName(user.data.username);
      setProfilePicture(user.data.profile_image);
    });
  }, []);

  return (
    <>
      <UserContainer onClick={() => handleToggle()} onMouseLeave={handleLeave}>
        <UserInformation>
          <ImageContainer>
            <UserImage
              {...{
                src: `https://inkwell.onrender.com/${profilePicture}`,
                alt: '',
              }}
            />
          </ImageContainer>
          <UserInfo>
            <h1>{username}</h1>
          </UserInfo>
        </UserInformation>
        <ChevronDown color="#fff" onClick={() => handleToggle()} />
        {showOptions && <ShowOptions user={username} />}
      </UserContainer>
    </>
  );
};

export default User;
