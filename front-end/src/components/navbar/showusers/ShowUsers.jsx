import {
  ShowContainer,
  ShowInfo,
  ImageContainer,
  UserImage,
  User,
} from '../../../styles/navbar/users/ShowUsers.styled';

const ShowUsers = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <ShowContainer>
      {users.map((user) => {
        return (
          <User>
            <ImageContainer>
              <UserImage
                {...{
                  src: `http://localhost:8080/${user.profile_image}`,
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
