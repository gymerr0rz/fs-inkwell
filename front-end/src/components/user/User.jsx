import { ChevronDown } from 'lucide-react';
import {
  UserContainer,
  UserImage,
  UserInformation,
  UserInfo,
} from '../../styles/user/User.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';

const User = () => {
  const [username, setUsername] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const header = useAuthHeader();

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('http://localhost:8080/user/getUser').then((user) => {
      setUsername(user.data.username);
      setDisplayName(user.data.username);
      setProfilePicture(user.data.profile_image);
    });
  }, []);

  return (
    <>
      <UserContainer>
        <UserInformation>
          <UserImage src={profilePicture} alt="" />
          <UserInfo>
            <h1>{username}</h1>
            <p>{displayName}</p>
          </UserInfo>
        </UserInformation>
        <ChevronDown color="#fff" />
      </UserContainer>
    </>
  );
};

export default User;
