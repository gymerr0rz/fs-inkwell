import { ChevronDown } from 'lucide-react';
import {
  UserContainer,
  UserImage,
  UserInformation,
  UserInfo,
} from '../../styles/user/User.styled';

const User = () => {
  return (
    <>
      <UserContainer>
        <UserInformation>
          <UserImage
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F974736784906248192%2FgPZwCbdS.jpg&f=1&nofb=1&ipt=c6419fb8d7334e4ae0000fc34960f9806fd1b50f837b8ba606d92576ebc6d9a4&ipo=images"
            alt=""
          />
          <UserInfo>
            <h1>ERR0RZ</h1>
            <p>@lolerr0rz</p>
          </UserInfo>
        </UserInformation>
        <ChevronDown color="#fff" />
      </UserContainer>
    </>
  );
};

export default User;
