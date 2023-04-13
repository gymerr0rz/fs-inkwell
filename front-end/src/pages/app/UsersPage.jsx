import { useEffect, useState } from 'react';
import axios from 'axios';
import { GithubIcon, TwitterIcon } from 'lucide-react';
import { useAuthHeader } from 'react-auth-kit';
import SERVER_URL from '../../config/config';
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

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [owner, setOwner] = useState(false);
  const header = useAuthHeader();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .get(`${SERVER_URL}/user/searchUser?id=` + id)
      .then((response) => {
        console.log(response);
        setUsers(response.data.users);
        setOwner(response.data.owner);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NotesContainer>
        <UserProfileContainer>
          <RealContainer>
            <Banner>
              <BannerImage
                src={`${SERVER_URL}/${users.profile_banner}`}
                alt=""
              />
              <div>
                <img src={`${SERVER_URL}/${users.profile_image}`} alt="" />
                {owner ? (
                  <button>EDIT PROFILE</button>
                ) : (
                  <button>ADD AS FRIEND</button>
                )}
              </div>
            </Banner>
            <ProfileContainer>
              <ProfileInfo>
                <Information>
                  <div>
                    <h1>{users.username}</h1>
                    <p>{`@${users.username}`}</p>
                  </div>
                  <p>{users.bio ? users.bio : 'No bio'}</p>
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
