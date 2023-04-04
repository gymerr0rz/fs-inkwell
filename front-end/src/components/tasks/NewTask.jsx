import axios from 'axios';
import {
  NewNoteButton,
  NewNoteButtonContainer,
  NewNoteInput,
  NewNoteStyled,
  NewNoteSelect,
  ColorPicker,
  Categories,
  ColorContainer,
} from '../../styles/notes/NewNote.styled';
import { BookmarkPlus, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';

const NewTask = (props) => {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [color, setColor] = useState('#00000');
  const [origin, setOrigin] = useState('new_tasks');

  const header = useAuthHeader();
  const handleClick = () => {
    axios.defaults.headers.common['Authorization'] = header();
    console.log(origin);
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

  const handleChange = (e) => {
    if (e.target.tagName.toLowerCase() === 'span') {
      const target = e.target;
      const buttons = document.querySelectorAll('span');
      setCategory(target.innerText);
      buttons.forEach((button) => {
        button.classList.remove('active');
        target.classList.add('active');
      });
      console.log(category);
    }
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
      <Categories onClick={(e) => handleChange(e)}>
        <span>Fashion</span>
        <span>Lifestyle</span>
        <span>Fitness</span>
        <span>Travel</span>
        <span>Technology</span>
        <span>Beauty</span>
        <span>Comedy</span>
        <span>Foods & Drinks</span>
      </Categories>
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
