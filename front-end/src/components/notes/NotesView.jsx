import { SortAsc, Trash, Edit } from 'lucide-react';

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
import dummyData from '../../dummy-data/dummydata.json';

const NotesView = () => {
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
          {dummyData.notes.map((a) => {
            return (
              <>
                <NotesCard>
                  <NotesFlex>
                    <NotesHeaderText>{a.title}</NotesHeaderText>
                    <NotesButtons>
                      <button>
                        <Edit />
                      </button>
                      <button>
                        <Trash />
                      </button>
                    </NotesButtons>
                  </NotesFlex>
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
