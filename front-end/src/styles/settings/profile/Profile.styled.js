import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  p {
    font-weight: 300;
    color: #a0a0a0;
  }
`;

const ProfileStyling = styled.div`
  background-color: #202123;
  border: 2px solid #494949;
  gap: 30px;
  padding: 15px 30px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  min-width: 786px;
  min-height: 130px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileText = styled.div`
  background-color: #202123;
  border: 2px solid #494949;
  gap: 30px;
  padding: 15px 30px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  min-width: 786px;
  min-height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  h1 {
    font-size: 1rem;
    width: 15%;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  max-height: 100px;
`;

const UpdateInfo = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  p {
    color: #a0a0a0;
  }
`;

const UpdateUsername = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    color: #a0a0a0;
  }
  input {
    width: 100%;
    background-color: #303236;
    border: 2px solid #494949;
    outline: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
  }
`;

const UpdatePicture = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  button {
    background-color: #343434;
    border: 2px solid rgba(73, 73, 73, 0.5);
    color: #fff;
    width: 205px;
    height: 30px;
    border-radius: 5px;
    font-weight: 600;
  }
`;

export {
  ProfileContainer,
  ProfileStyling,
  ProfileImage,
  UpdateInfo,
  UpdatePicture,
  UpdateUsername,
  ProfileText,
};
