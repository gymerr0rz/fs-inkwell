import axios from 'axios';
import { SortAsc, Trash, Edit } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  NotesViewContainer,
  NotesViewHeadText,
  NotesHeaderText,
  NotesSearch,
  NotesSearchContainer,
  NotesSortButton,
  NotesCard,
  NotesCardContainer,
  CardText,
  NotesFlex,
  NotesButtons,
} from '../../styles/notes/NotesView.styled';
import { useAuthHeader } from 'react-auth-kit';

const NotesView = () => {
  const [notes, setNotes] = useState([]);

  const header = useAuthHeader();
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('http://localhost:8080/user/getNotes').then((response) => {
      const newNotes = response.data;
      console.log(newNotes);
      setNotes([...notes, ...newNotes]);
    });
  }, []);

  const handleDelete = () => {};

  return (
    <>
      <NotesViewContainer>
        <NotesViewHeadText>Notes</NotesViewHeadText>
        <NotesSearchContainer>
          <NotesSearch type="text" placeholder="Search..." />
          <NotesSortButton>
            <SortAsc size={20} />
            SORT
          </NotesSortButton>
        </NotesSearchContainer>
        <NotesCardContainer>
          {notes.map((note) => {
            return (
              <NotesCard>
                <NotesFlex>
                  <NotesHeaderText>{note?.title}</NotesHeaderText>
                  <NotesButtons>
                    <button>
                      <Edit />
                    </button>
                    <button onClick={handleDelete}>
                      <Trash />
                    </button>
                  </NotesButtons>
                </NotesFlex>
                <br />
                <CardText>{note?.content}</CardText>
              </NotesCard>
            );
          })}
        </NotesCardContainer>
      </NotesViewContainer>
    </>
  );
};

export default NotesView;
