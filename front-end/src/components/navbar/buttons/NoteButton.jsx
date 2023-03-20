import { Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
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

  if (!props.show) {
    return (
      <>
        <AddNoteBtn onClick={handleClick}>
          <Plus fill="white" />
          {props?.name}
        </AddNoteBtn>
        {showNewNote && <NewNote />}
      </>
    );
  }

  return (
    <>
      <AddNoteBtnProps onClick={handleClick}>
        <Plus fill="white" />
      </AddNoteBtnProps>
      {showNewNote && <NewNote />}
    </>
  );
};

export default NoteButton;
