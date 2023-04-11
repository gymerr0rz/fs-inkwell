import { ClipboardCheck, Edit2, Trash } from 'lucide-react';
import { useState } from 'react';
import { Container } from '../../../styles/options/Options.styled';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';
import SERVER_URL from '../../../config/config';

const ShowOptions = (options) => {
  const [title] = useState(options.title);
  const header = useAuthHeader();

  const handleTrash = () => {
    console.log(title);
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .delete(`${SERVER_URL}/user/deleteTask`, {
        data: { title },
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    console.log(title);
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .delete(`${SERVER_URL}/user/editTask`, {
        data: { title },
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleComplete = () => {
    console.log(title);
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .post(`${SERVER_URL}/user/changeStatusTask`, {
        title,
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <li>
        <button className="trash" onClick={handleTrash}>
          Delete <Trash />
        </button>
      </li>
      <li>
        <button onClick={handleEdit}>
          Edit
          <Edit2 />
        </button>
      </li>
      <li>
        <button onClick={handleComplete}>
          Mark as Complete
          <ClipboardCheck />
        </button>
      </li>
    </Container>
  );
};

export default ShowOptions;
