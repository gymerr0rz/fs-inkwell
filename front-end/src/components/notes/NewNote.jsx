import axios from 'axios';
import {
  NewNoteButton,
  NewNoteButtonContainer,
  NewNoteInput,
  NewNoteStyled,
} from '../../styles/notes/NewNote.styled';
import { BookmarkPlus, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';

const NewNote = (props) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const header = useAuthHeader();
  const handleClick = () => {
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .post('http://localhost:8080/user/createNote', {
        title,
        content,
      })
      .then((response) => console.log(response));

    // window.location.reload();
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <NewNoteStyled className="tab">
      <h1>New Note</h1>
      <NewNoteInput
        type="text"
        id="title"
        placeholder="Note Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <NewNoteInput
        type="text"
        id="content"
        placeholder="Note Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <NewNoteButtonContainer>
        <NewNoteButton onClick={handleClick}>
          <BookmarkPlus /> ADD
        </NewNoteButton>
        <NewNoteButton onClick={handleClose}>
          <XCircle /> CANCEL
        </NewNoteButton>
      </NewNoteButtonContainer>
    </NewNoteStyled>
  );
};

export default NewNote;
