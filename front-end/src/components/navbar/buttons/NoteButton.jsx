import { Plus } from 'lucide-react';
import { AddNoteBtn } from '../../../styles/navbar/NoteButton.styled';

const NoteButton = () => {
  return (
    <>
      <AddNoteBtn>
        <Plus fill="white" />
        NEW NOTE
      </AddNoteBtn>
    </>
  );
};

export default NoteButton;
