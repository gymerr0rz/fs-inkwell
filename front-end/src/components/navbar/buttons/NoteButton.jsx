import { Plus } from 'lucide-react';
import { useState } from 'react';
import {
  AddNoteBtn,
  AddNoteBtnProps,
} from '../../../styles/navbar/NoteButton.styled';
import NewNote from '../../notes/NewNote';

const NoteButton = (props) => {
  const [showNewNote, setShowNewNote] = useState(false);

  const handleClick = () => {
    if (showNewNote === true) {
      setShowNewNote(false);
    } else {
      setShowNewNote(true);
    }
  };

  return (
    <>
      <AddNoteBtn onClick={handleClick}>
        <Plus fill="white" />
        ADD NOTE
      </AddNoteBtn>
      {showNewNote && <NewNote location={props.location} />}
    </>
  );
};

export default NoteButton;
