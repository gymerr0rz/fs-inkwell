import { Plus } from 'lucide-react';
import { useState } from 'react';
import { AddNoteBtn } from '../../../styles/navbar/NoteButton.styled';
import NewNote from '../../notes/NewNote';

const NoteButton = () => {
  const [showNewNote, setShowNewNote] = useState(false);

  const handleClick = (e) => {
    if (showNewNote === true) {
      setShowNewNote(false);
    } else {
      setShowNewNote(true);
    }
  };

  return (
    <>
      <AddNoteBtn onClick={(e) => handleClick(e)}>
        <Plus fill="white" />
        NEW NOTE
      </AddNoteBtn>
      {showNewNote && <NewNote />}
    </>
  );
};

export default NoteButton;
