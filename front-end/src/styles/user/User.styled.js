import styled from 'styled-components';

const UserContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 100px;
`;

const UserImage = styled.img`
  max-height: 60px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  padding-right: 30px;
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
export { UserContainer, UserImage, UserInfo };
