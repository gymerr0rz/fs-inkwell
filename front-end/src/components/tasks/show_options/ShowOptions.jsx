import { ClipboardCheck, Edit2, Trash } from 'lucide-react';
import { useState } from 'react';
import { Container } from '../../../styles/options/Options.styled';
import axios from 'axios';

const ShowOptions = (props) => {
  const [title] = useState(props.title);

  const handleTrash = () => {
    axios.delete('http');
  };

  const handleEdit = () => {};

  const handleComplete = () => {};

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
