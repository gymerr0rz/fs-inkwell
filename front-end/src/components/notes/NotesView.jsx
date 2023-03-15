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
  CardText,
} from '../../styles/notes/NotesView.styled';
import dummyData from '../../dummy-data/dummydata.json';

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
          {dummyData.notes.map((a) => {
            return (
              <>
                <NotesCard>
                  <NotesHeaderText>{a.title}</NotesHeaderText>
                  <br />
                  <CardText>{a.content}</CardText>
                </NotesCard>
              </>
            );
          })}
        </NotesCardContainer>
      </NotesViewContainer>
    </>
  );
};

export default NotesView;
