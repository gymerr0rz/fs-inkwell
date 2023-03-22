import axios from 'axios';
import {
  NewNoteButton,
  NewNoteButtonContainer,
  NewNoteInput,
  NewNoteStyled,
  NewNoteSelect,
  ColorPicker,
  ColorContainer,
} from '../../styles/notes/NewNote.styled';
import { BookmarkPlus, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuthHeader } from 'react-auth-kit';

const NewTask = (props) => {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [color, setColor] = useState('#000');
  const [origin, setOrigin] = useState(null);

  const header = useAuthHeader();
  const handleClick = () => {
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .post('http://localhost:8080/user/createTask', {
        title,
        category,
        color,
        origin,
      })
      .then((response) => console.log(response));

    window.location.reload();
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <NewNoteStyled className="tab">
      <h1>New Task</h1>
      <NewNoteInput
        type="text"
        id="title"
        placeholder="Task Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <NewNoteInput
        type="text"
        id="content"
        placeholder="Task Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <ColorContainer>
        <label>Choose color for category border.</label>
        <ColorPicker type="color" onChange={(e) => setColor(e.target.value)} />
      </ColorContainer>
      <NewNoteSelect>
        <select
          name="origin"
          id="origin"
          className="custom-select"
          onChange={(e) => setOrigin(e.target.value)}
        >
          <option value="new_tasks">New Tasks</option>
          <option value="completed">Completed</option>
        </select>
      </NewNoteSelect>
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

export default NewTask;
