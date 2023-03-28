import styled from 'styled-components';

const UserContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const UserImage = styled.img`
  max-height: 60px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  h1 {
    font-weight: 400;
    font-size: 18px;
    white-space: nowrap;
  }
  p {
    font-weight: 400;
    font-size: 18px;
  }
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export { UserContainer, UserImage, UserInfo, UserInformation };
