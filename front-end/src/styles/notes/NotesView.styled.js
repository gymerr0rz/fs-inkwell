import styled from 'styled-components';

const NotesViewContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121215;
  padding: 50px;
  overflow: auto;
`;

const NotesViewHeadText = styled.h1`
  color: #fff;
  font-weight: 400;
  margin-bottom: 10px;
`;

const NotesHeaderText = styled.h1`
  ::before {
    content: '';
    padding: 1px 15px;
    background-color: #fff;
    margin-right: 10px;
    border-radius: 100%;
  }
  font-size: 1.5rem;
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
  min-width: 100px;
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

const NotesCard = styled.div`
  min-width: 280px;
  min-height: 300px;
  padding: 20px;
  overflow: hidden;
  word-wrap: break-word;
  background-color: #151516;
  border: 1px solid #363535;
  border-radius: 10px;
  color: #fff;
`;

const NotesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  min-height: 200px;
`;

const CardText = styled.p`
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #363535;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #113454;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  padding: 15px;
  background-color: #29292b;
  border-radius: 10px;
  font-size: 1.2rem;
  height: 90%;
  overflow: auto;
`;

const NotesFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const NotesButtons = styled.div`
  display: flex;
  gap: 5px;
  button {
    background-color: #29292b;
    border-radius: 10px;
    outline: none;
    border: none;
    max-width: 35px;
    max-height: 35px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }
`;

export {
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
};
