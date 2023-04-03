import styled from 'styled-components';

const WeatherContainer = styled.div`
  min-width: 500px;
  height: 323px;
  background-color: #202123;
  border: 2px solid #2d2d2d;
  margin: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const WeatherCurrent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  color: #fff;
`;
const WeatherButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button {
    width: 40%;
    background-color: #121215;
    border: none;
    height: 40px;
    font-weight: 800;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
const WeatherStatus = styled.div`
  text-align: right;
  p {
    color: #9b9b9b;
  }
`;
const WeatherInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  h1 {
    display: flex;
    gap: 2.5px;
    font-size: 5rem;
    b {
      font-size: 1rem;
    }
  }
`;

export {
  WeatherContainer,
  WeatherCurrent,
  WeatherInformation,
  WeatherStatus,
  WeatherButtons,
};
