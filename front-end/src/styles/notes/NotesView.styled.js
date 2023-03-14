import styled from 'styled-components';

const NotesViewContainer = styled.div`
  background-color: #121215;
  padding: 50px;
`;

const NotesViewHeadText = styled.h1`
  color: #fff;
  font-weight: 400;
`;

const NotesHeaderText = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

const NotesSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const NotesSearch = styled.input`
  width: 100%;
  min-height: 45px;
  outline: none;
  border-radius: 10px;
  background: #222222;
  border: none;
  color: #fff;
  padding-left: 10px;
`;

const NotesSortButton = styled.button`
  width: 7.5%;
  min-height: 45px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #0085ff;
  background-color: #113454;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

const NotesCard = styled.div``;

export {
  NotesViewContainer,
  NotesViewHeadText,
  NotesHeaderText,
  NotesSearch,
  NotesSearchContainer,
  NotesSortButton,
};
