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

const ProfileSettings = () => {
  return (
    <>
      <ProfileContainer>
        <h1>Profile Picture</h1>
        <ProfileStyling>
          <ProfileImage
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F974736784906248192%2FgPZwCbdS.jpg&f=1&nofb=1&ipt=c6419fb8d7334e4ae0000fc34960f9806fd1b50f837b8ba606d92576ebc6d9a4&ipo=images"
            alt=""
          />
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
            <input type="text" placeholder="lol_err0rz" />
            <p>You may update your username</p>
          </UpdateUsername>
        </ProfileText>
      </ProfileContainer>

      <ProfileContainer>
        <ProfileText>
          <h1>Display Name </h1>
          <UpdateUsername>
            <input type="text" placeholder="lol_err0rz" />
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
