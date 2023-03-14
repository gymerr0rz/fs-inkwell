import { SortAsc } from 'lucide-react';

import {
  NotesViewContainer,
  NotesViewHeadText,
  NotesHeaderText,
  NotesSearch,
  NotesSearchContainer,
  NotesSortButton,
  NotesCard,
  NotesCardContainer,
} from '../../styles/notes/NotesView.styled';

const NotesView = () => {
  return (
    <>
      <NotesViewContainer>
        <NotesViewHeadText>Notes</NotesViewHeadText>
        <NotesSearchContainer>
          <NotesSearch type="text" />
          <NotesSortButton>
            <SortAsc size={20} />
            SORT
          </NotesSortButton>
        </NotesSearchContainer>
        <NotesCardContainer>
          <NotesCard>
            <NotesHeaderText>Workout plan</NotesHeaderText>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quo laborum quas, corporis quam ut neque assumenda suscipit
              voluptatem distinctio facere inventore alias sunt repellendus
              fugit at molestias facilis cupiditate veniam debitis. Provident
              voluptatibus distinctio vero amet culpa adipisci, quos non
              laborum! Nihil labore dicta corrupti neque atque nostrum odio?
            </p>
          </NotesCard>
        </NotesCardContainer>
      </NotesViewContainer>
    </>
  );
};

export default NotesView;
