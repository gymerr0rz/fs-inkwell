import axios from 'axios';
import { SortAsc, Trash, Edit, Search } from 'lucide-react';
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

  const handleDelete = (e) => {
    const title =
      e.currentTarget.parentNode.parentNode.querySelector('h1').innerText;
    axios.defaults.headers.common['Authorization'] = header();
    axios.delete('http://localhost:8080/user/deleteNote', {
      data: { title },
    });

    window.location.reload();
  };

  return (
    <>
      <NotesViewContainer>
        <NotesViewHeadText>Notes</NotesViewHeadText>
        <NotesSearchContainer>
          <NotesSearch type="text" placeholder="Search..." />
          <NotesSortButton>
            <SortAsc size={20} color="#8BFFC0" />
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
