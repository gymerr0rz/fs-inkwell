import { Trash } from 'lucide-react';
import {
  ProfileContainer,
  ProfileStyling,
  ProfileImage,
  UpdatePicture,
  UpdateInfo,
  ProfileText,
  UpdateUsername,
} from '../../../styles/settings/profile/Profile.styled';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';
import { useState } from 'react';

const ProfileSettings = () => {
  const [username, setUsername] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
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
      <ProfileContainer>
        <h1>Profile Picture</h1>
        <ProfileStyling>
          <ProfileImage src={profilePicture} alt="" />
          <UpdateInfo>
            <UpdatePicture>
              <button>Update Profile Picture</button>
              <Trash />
            </UpdatePicture>
            <p>Must be JPEG, PNG, or GIF and cannot exceed 10MB. </p>
          </UpdateInfo>
        </ProfileStyling>
      </ProfileContainer>

      <ProfileContainer>
        <h1>Profile Settings</h1>
        <p>Change identifying details for your account</p>
        <ProfileText>
          <h1>Username</h1>
          <UpdateUsername>
            <input type="text" placeholder={username} />
            <p>You may update your username</p>
          </UpdateUsername>
        </ProfileText>
      </ProfileContainer>

      <ProfileContainer>
        <ProfileText>
          <h1>Display Name </h1>
          <UpdateUsername>
            <input type="text" placeholder={username} />
            <p>Customize capitalization for your username</p>
          </UpdateUsername>
        </ProfileText>
      </ProfileContainer>

      <ProfileContainer>
        <ProfileText>
          <h1>Bio</h1>
          <UpdateUsername>
            <input type="text" placeholder="-" />
            <p>
              Description for the About panel on your channel page in under 300
              characters
            </p>
          </UpdateUsername>
        </ProfileText>
      </ProfileContainer>
    </>
  );
};

export default ProfileSettings;
