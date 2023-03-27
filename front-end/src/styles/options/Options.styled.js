import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: -180px;
  top: 0;
  z-index: 99;
  width: 200px;
  height: 158px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 10px;
  li {
    list-style: none;
    button {
      background-color: transparent;
      color: #fff;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      border: none;
      width: 100%;
    }
  }
`;

export { Container };
