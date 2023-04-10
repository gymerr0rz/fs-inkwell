import axios from 'axios';
import { SortAsc, Trash, Edit, Plus } from 'lucide-react';
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
  SingularButton,
} from '../../styles/notes/NotesView.styled';
import { useAuthHeader } from 'react-auth-kit';
import NewNote from './NewNote';

const NotesView = () => {
  const [notes, setNotes] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  const header = useAuthHeader();
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('https://inkwell.onrender.com/user/getNotes').then((response) => {
      const newNotes = response.data;
      setNotes([...notes, ...newNotes]);
    });
  }, []);

  const handleDelete = (e) => {
    const title =
      e.currentTarget.parentNode.parentNode.querySelector('h1').innerText;
    axios.defaults.headers.common['Authorization'] = header();
    axios.delete('https://inkwell.onrender.com/user/deleteNote', {
      data: { title },
    });

    window.location.reload();
  };

  const handleClose = () => {
    setShowComponent(false);
  };

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <>
      {showComponent && <NewNote onClose={handleClose} />}
      <NotesViewContainer>
        <NotesViewHeadText>Notes</NotesViewHeadText>
        <NotesSearchContainer>
          <NotesSearch type="text" placeholder="Search..." />
          <NotesSortButton>
            <SortAsc size={20} color="#6364FF" />
            SORT
          </NotesSortButton>
          <SingularButton onClick={handleClick}>
            <Plus />
            NEW NOTE
          </SingularButton>
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
                <CardText>{note?.description}</CardText>
              </NotesCard>
            );
          })}
        </NotesCardContainer>
      </NotesViewContainer>
    </>
  );
};

export default NotesView;
