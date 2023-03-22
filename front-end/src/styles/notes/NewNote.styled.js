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
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid #494949;
  backdrop-filter: blur(10px);
  border-radius: 30px;
  overflow: hidden;
  h1 {
    color: #fff;
    font-size: 3rem;
    margin-bottom: 20px;
  }
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

const NewNoteSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  select {
    min-width: 350px;
    width: 30%;
    padding: 10px;
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
  }
`;

export {
  NewNoteStyled,
  NewNoteButton,
  NewNoteButtonContainer,
  NewNoteInput,
  NewNoteSelect,
};
