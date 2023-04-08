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
} from '../../styles/userpage/UserPage.styled';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    axios
      .get('http://localhost:8080/user/searchUser?id=' + id)
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
                src={users.profile_banner ? users.profile_banner : ''}
                alt=""
              />
              <div>
                <img
                  src={`http://localhost:8080/${users.profile_image}`}
                  alt=""
                />
                <button>ADD AS FRIEND</button>
              </div>
            </Banner>
            <ProfileContainer>
              <ProfileInfo>
                <div>
                  <h1>{users.username}</h1>
                  <p>{`@${users.username}`}</p>
                </div>
                <p>{users.bio ? users.bio : 'No Bio Really'}</p>
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
