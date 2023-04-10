import { useEffect, useState } from 'react';
import {
  NotesContainer,
  UserProfileContainer,
  RealContainer,
  Banner,
  BannerImage,
  ProfileInfo,
  Card,
  ProfileContainer,
  Information,
  SocialLinks,
} from '../../styles/userpage/UserPage.styled';
import axios from 'axios';
import { GithubIcon, TwitterIcon } from 'lucide-react';
import { useAuthHeader } from 'react-auth-kit';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [authenticated, setAuthenticated] = useState();
  const header = useAuthHeader();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .get('https://inkwell.onrender.com/user/searchUser?id=' + id)
      .then((response) => {
        console.log(...response.data);
        setUsers(...response.data);
      });
  }, []);

  return (
    <>
      <NotesContainer>
        <UserProfileContainer>
          <RealContainer>
            <Banner>
              <BannerImage
                src={
                  users.profile_banner
                    ? `https://inkwell.onrender.com/${users.profile_banner}`
                    : ''
                }
                alt=""
              />
              <div>
                <img
                  src={`https://inkwell.onrender.com/${users.profile_image}`}
                  alt=""
                />
                <button>ADD AS FRIEND</button>
              </div>
            </Banner>
            <ProfileContainer>
              <ProfileInfo>
                <Information>
                  <div>
                    <h1>{users.username}</h1>
                    <p>{`@${users.username}`}</p>
                  </div>
                  <p>{users.bio ? users.bio : 'No Bio Really'}</p>
                </Information>
                <SocialLinks>
                  <p>Socials</p>
                  <div>
                    <li>
                      <TwitterIcon fill="#fff" stroke="none" />
                    </li>
                    <li>
                      <GithubIcon fill="#fff" stroke="none" />
                    </li>
                  </div>
                </SocialLinks>
              </ProfileInfo>
              <Card></Card>
            </ProfileContainer>
          </RealContainer>
        </UserProfileContainer>
      </NotesContainer>
    </>
  );
};

export default UsersPage;
