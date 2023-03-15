import styled from 'styled-components';

const NewNoteStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 50%;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 30px;
`;

const NewNoteButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-self: start;
  align-items: center;
  padding: 10px 30px;
  background-color: #202123;
  color: #fff;
  gap: 5px;
  cursor: pointer;
`;

const NewNoteButtonContainer = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const NewNoteInput = styled.textarea`
  &#content {
    padding: 25px;
    min-width: 350px;
    min-height: 200px;
    outline: none;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
  }
  resize: none;
  &#title {
    padding: 25px;
    min-width: 350px;
    min-height: 50px;
    outline: none;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
  }
`;

export { NewNoteStyled, NewNoteButton, NewNoteButtonContainer, NewNoteInput };
