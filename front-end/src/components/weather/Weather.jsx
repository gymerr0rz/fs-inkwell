import { Cloud } from 'lucide-react';
import {
  WeatherContainer,
  WeatherCurrent,
  WeatherWeek,
  WeatherInformation,
} from '../../styles/weather/Weather.styled';

const Weather = () => {
  return (
    <WeatherContainer>
      <WeatherCurrent>
        {/* Top Part Current Forecast*/}
        <WeatherInformation>
          <Cloud size={100} />
          <h1>
            14<b>°C°F</b>
          </h1>
        </WeatherInformation>

        <div>
          <h1>Weather</h1>
          <p>Saturday 00:00</p>
          <p>Cloudy</p>
        </div>
      </WeatherCurrent>
      {/* Lower Part Week Forecast */}
      <WeatherWeek></WeatherWeek>
    </WeatherContainer>
  );
};

export default Weather;
