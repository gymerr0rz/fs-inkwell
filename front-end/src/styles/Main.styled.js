import styled from 'styled-components';

const MainPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 5, 0.95);
  align-items: center;
  color: #fff;
  h1 {
    margin: 10px;
  }
  p {
    font-weight: 400;
    word-spacing: 1px;
  }
  button {
    text-transform: uppercase;
    padding: 15px 40px;
    margin: 10px 10px;
  }
`;

export { MainPageStyle };
