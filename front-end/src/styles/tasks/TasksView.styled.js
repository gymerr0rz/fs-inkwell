import styled from 'styled-components';

const TasksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: 121215;
`;

const TasksTopText = styled.h1`
  color: #fff;
  font-size: 3rem;
  white-space: nowrap;
`;

const TasksTop = styled.div`
  border-bottom: #848486 1px solid;
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  align-items: center;
  width: 100%;
  height: 20vh;
  padding: 50px;
  position: relative;
`;

const TasksSearch = styled.div`
  width: 100%;
  height: 60px;
  background-color: #2b2c2e;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: #fff;
  gap: 10px;
  border-radius: 10px;
  input {
    outline: none;
    color: #fff;
    background-color: #2b2c2e;
    border: none;
    height: 100%;
    width: 100%;
  }
`;

const Icon = styled.div`
  cursor: pointer;
  :hover {
    color: #fff;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 5px;
  color: #848486;
`;

const TasksBottom = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 50px;
  flex-direction: row;
  gap: 50px;
  align-items: flex-start;
  color: #fff;
`;

const TasksManager = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export {
  TasksContainer,
  TasksTop,
  TasksSearch,
  Icon,
  TasksBottom,
  TasksTopText,
  TasksManager,
};
