import { Trash } from 'lucide-react';
import {
  ProfileContainer,
  ProfileStyling,
  ProfileImage,
  UpdatePicture,
  UpdateInfo,
  ProfileText,
  UpdateUsername,
  ImageContainer,
} from '../../../styles/settings/profile/Profile.styled';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';
import { useState } from 'react';

const ProfileSettings = () => {
  const [username, setUsername] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const header = useAuthHeader();

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('http://localhost:8080/user/getUser').then((user) => {
      setUsername(user.data.username);
      setDisplayName(user.data.username);
      setProfilePicture(user.data.profile_image);
      setBio(user.data.bio);
    });
  }, []);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('profile_image', selectedFile);

    axios
      .post('http://localhost:8080/user/uploadProfileImage', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ProfileContainer>
        <h1>Profile Picture</h1>
        <ProfileStyling>
          <ImageContainer>
            <ProfileImage
              {...{ src: `http://localhost:8080/${profilePicture}`, alt: '' }}
            />
          </ImageContainer>
          <UpdateInfo>
            <UpdatePicture>
              <input type="file" onChange={handleFileSelect} />
              <Trash />
            </UpdatePicture>
            <p>Must be JPEG, PNG, or GIF and cannot exceed 10MB. </p>
            <button onClick={handleFormSubmit}>Save Changes</button>
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
            <input type="text" placeholder={bio} />
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
