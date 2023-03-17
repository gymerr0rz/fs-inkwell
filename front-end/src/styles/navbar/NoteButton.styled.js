import styled from 'styled-components';

const AddNoteBtn = styled.button`
  background-color: #3a3a3a;
  border: 1px solid #8bffc0;
  height: 50px;
  width: 250px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  outline: none;
  color: #8bffc0;
  gap: 10px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
`;

const AddNoteBtnProps = styled.button`
  background-color: #3a3a3a;
  border: 1px solid #8bffc0;
  height: 50px;
  width: 50px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  outline: none;
  color: #8bffc0;
  gap: 10px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
`;

export { AddNoteBtn, AddNoteBtnProps };
