import { ClipboardCheck, Edit2, Trash } from 'lucide-react';
import { useState } from 'react';
import { Container } from '../../../styles/options/Options.styled';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';

const ShowOptions = (options) => {
  const [title] = useState(options.title);
  const header = useAuthHeader();

  const handleTrash = () => {
    console.log(title);
    axios.defaults.headers.common['Authorization'] = header();
    axios.delete('http://localhost:8080/user/deleteTask', {
      data: { title },
    });

    window.location.reload();
  };

  const handleEdit = () => {
    console.log(title);
    axios.defaults.headers.common['Authorization'] = header();
    axios.delete('http://localhost:8080/user/editTask', {
      data: { title },
    });

    window.location.reload();
  };

  const handleComplete = () => {
    console.log(title);
    axios.defaults.headers.common['Authorization'] = header();
    axios.post('http://localhost:8080/user/changeStatusTask', {
      title,
    });

    window.location.reload();
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
