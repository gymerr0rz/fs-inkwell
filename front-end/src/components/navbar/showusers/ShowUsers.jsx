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
      `https://dynamic-scone-61b6b0.netlify.app/app/users?id=${encodeURIComponent(
        user.username
      )}`
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
                  src: `https://inkwell.onrender.com/${user.profile_image}`,
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
