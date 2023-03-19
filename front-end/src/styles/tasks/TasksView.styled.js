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
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 433px;
  height: 100%;
  gap: 20px;
`;

const TasksTitle = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  h1 {
    font-weight: 600;
    white-space: nowrap;
  }

  button {
    height: 100%;
    border: 2px solid #484848;
    background-color: #202123;
    color: #959595;
    width: 145px;
    border-radius: 10px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: 700;
    cursor: pointer;
  }

  .title {
    flex-direction: row;
    display: flex;
    align-items: center;
    height: 100%;
    gap: 10px;
  }

  .title div {
    color: #959595;
    font-weight: 700;
    height: 100%;
    width: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #202123;
    border-radius: 10px;
  }
`;

const TasksContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #202123;
  border-radius: 10px;
  min-height: 116px;
  border: 2px solid #494949;
  overflow: hidden;
`;

const TasksMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .abc {
    font-size: 0.7rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }
`;

export {
  TasksContainer,
  TasksTop,
  TasksSearch,
  Icon,
  TasksBottom,
  TasksTopText,
  TasksManager,
  TasksTitle,
  TasksContent,
  TasksMenu,
};
