import SERVER_URL from '../../../config/config';
import {
  ShowContainer,
  ShowInfo,
  ImageContainer,
  UserImage,
  User,
} from '../../../styles/navbar/users/ShowUsers.styled';

const ShowUsers = (props) => {
  const users = props.users;

  const handleClick = (user) => {
    window.location.assign(
      `http://localhost:3000/app/users?id=${encodeURIComponent(user.username)}`
    );
  };

  return (
    <ShowContainer>
      {users.map((user) => {
        return (
          <User onClick={() => handleClick(user)}>
            <ImageContainer>
              <UserImage
                {...{
                  src: `${SERVER_URL}/${user.profile_image}`,
                  alt: '',
                }}
              />
            </ImageContainer>
            <ShowInfo>
              <h1>{user.username}</h1>
              <p>{user.email}</p>
            </ShowInfo>
          </User>
        );
      })}
    </ShowContainer>
  );
};

export default ShowUsers;
