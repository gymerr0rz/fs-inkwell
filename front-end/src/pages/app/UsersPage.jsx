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
                src="https://pbs.twimg.com/profile_banners/785651770697523200/1674108300/1500x500"
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
                <p>
                  Not affiliated with xQc or his mods The fastest source for any
                  and all news and updates involving the best content creator on
                  the globe, @xQc
                </p>
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
