import styled from 'styled-components';

const NotesContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #121215;
  padding-left: 300px;
  overflow: hidden;
  flex-direction: row;
`;

const UserProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RealContainer = styled.div`
  width: 80%;
  height: 747px;
  background-color: #202123;
  border: 1px solid #494949;
  border-radius: 10px;
  overflow: hidden;
`;

const Banner = styled.div`
  height: 40%;
  width: 100%;
  position: relative;
  div {
    position: absolute;
    bottom: -65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 50px;
    button {
      border: 1px solid #494949;
      background-color: #6364ff;
      height: 40px;
      width: 150px;
      color: #fff;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
    }
    img {
      height: 134px;
      border-radius: 50%;
      border: 1px solid #494949;
    }
  }
`;

const BannerImage = styled.img`
  background-color: #cccccc;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: cover;
  z-index: 98;
`;

const ProfileInfo = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 30px 0;
  color: #fff;
  div {
    h1 {
      color: #fff;
    }
    p {
      color: #848486;
    }
  }
`;
const Card = styled.div`
  width: 60%;
  height: 80%;
  background-color: #2b2c2f;
  border: 1px solid #494949;
`;

const ProfileContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  flex-direction: row;
  gap: 30px;
`;

export {
  NotesContainer,
  UserProfileContainer,
  RealContainer,
  Banner,
  BannerImage,
  ProfileContainer,
  ProfileInfo,
  Card,
};
