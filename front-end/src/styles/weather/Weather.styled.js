import styled from 'styled-components';

const WeatherContainer = styled.div`
  width: 33%;
  height: 323px;
  background-color: #202123;
  border: 2px solid #2d2d2d;
  margin: 30px;
`;
const WeatherCurrent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  color: #fff;
`;
const WeatherWeek = styled.div``;
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

export { WeatherContainer, WeatherCurrent, WeatherWeek, WeatherInformation };
