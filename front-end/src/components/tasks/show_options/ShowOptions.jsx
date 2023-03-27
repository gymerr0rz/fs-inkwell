import { ClipboardCheck, Edit2, Trash } from 'lucide-react';
import { Container } from '../../../styles/options/Options.styled';

const ShowOptions = (props) => {
  return (
    <Container>
      <li>
        <button>
          Delete <Trash />
        </button>
      </li>
      <li>
        <button>
          Edit
          <Edit2 />
        </button>
      </li>
      <li>
        <button>
          Mark as Complete
          <ClipboardCheck />
        </button>
      </li>
    </Container>
  );
};

export default ShowOptions;
