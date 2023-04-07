import { useEffect, useState } from 'react';
import { NotesContainer } from '../../styles/notes/NotesPage.styled';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    axios
      .get('http://localhost:8080/user/searchUser?id=' + id)
      .then((response) => {
        setUsers([...response.data]);
      });
  }, []);

  return (
    <>
      <NotesContainer>
        {users.map((user) => {
          return (
            <>
              <h1>{user.username}</h1>
              <h1>{user.email}</h1>
            </>
          );
        })}
      </NotesContainer>
    </>
  );
};

export default UsersPage;
