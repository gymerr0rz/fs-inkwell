import {
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Cloudy,
  Droplet,
  Droplets,
  LocateIcon,
  RefreshCcw,
  Search,
  Sun,
} from 'lucide-react';
import {
  WeatherContainer,
  WeatherCurrent,
  WeatherStatus,
  WeatherInformation,
  WeatherButtons,
  WeatherInput,
  WeatherSearch,
} from '../../styles/weather/Weather.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import SERVER_URL from '../../config/config';

const Weather = () => {
  const [temperature, setTemperature] = useState('0');
  const [status, setStatus] = useState(null);
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState('00:00');
  const [gps, setGps] = useState(null);
  const [clicked, setClicked] = useState(false);

  function getWeatherData() {
    if (!localStorage.getItem('weatherLocation')) {
      setGps('Input a location');
      return;
    }
    const location = localStorage.getItem('weatherLocation');

    axios
      .post(`${SERVER_URL}/user/getWeather`, {
        location,
      })
      .then((response) => {
        const weatherData = response.data;
        setTemperature(weatherData.current.temp_c);
        setStatus(weatherCode(weatherData.current.condition.code));
        setWeather(weatherData.current.condition.text);
        setTime(weatherData.location.localtime);
        setGps(weatherData.location.name + ', ' + weatherData.location.country);
        setClicked(false);
      });

    function weatherCode(code) {
      const weatherStatus = {
        1000: <Sun size={100} />,
        1003: <Cloudy size={100} />,
        1006: <Cloudy size={100} />,
        1009: <Cloudy size={100} />,
        1030: <CloudFog size={100} />,
        1063: <CloudRain size={100} />,
        1066: <CloudSnow size={100} />,
        1069: <CloudSnow size={100} />,
        1072: <CloudSnow size={100} />,
        1087: <CloudLightning size={100} />,
        1114: <CloudSnow size={100} />,
        1117: <CloudSnow size={100} />,
        1135: <CloudFog size={100} />,
        1147: <CloudFog size={100} />,
        1150: <CloudDrizzle size={100} />,
        1153: <CloudDrizzle size={100} />,
        1168: <CloudDrizzle size={100} />,
        1171: <CloudDrizzle size={100} />,
        1180: <Droplet size={100} />,
        1183: <Droplets size={100} />,
        1186: <CloudRain size={100} />,
        1189: <CloudRain size={100} />,
        1192: <CloudRain size={100} />,
        1195: <CloudRain size={100} />,
        1198: <CloudRain size={100} />,
        1201: <CloudRain size={100} />,
        1204: <CloudRain size={100} />,
        1207: <CloudRain size={100} />,
        1210: <CloudSnow size={100} />,
        1213: <CloudSnow size={100} />,
        1216: <CloudSnow size={100} />,
        1219: <CloudSnow size={100} />,
        1222: <CloudSnow size={100} />,
        1225: <CloudSnow size={100} />,
        1237: <CloudSnow size={100} />,
        1240: <CloudRain size={100} />,
        1243: <CloudRain size={100} />,
        1246: <CloudRain size={100} />,
        1249: <CloudRain size={100} />,
        1252: <CloudRain size={100} />,
        1255: <CloudRain size={100} />,
        1258: <CloudRain size={100} />,
        1261: <CloudRain size={100} />,
        1264: <CloudRain size={100} />,
        1273: <CloudLightning size={100} />,
        1276: <CloudLightning size={100} />,
        1279: <CloudLightning size={100} />,
        1282: <CloudLightning size={100} />,
      };

      return weatherStatus[code] || null;
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  function handleClick() {
    if (clicked) {
      return (
        <WeatherSearch>
          <WeatherInput
            type="text"
            placeholder="Paris, France"
            onChange={(e) => {
              localStorage.setItem('weatherLocation', e.target.value);
            }}
          />
          <span onClick={getWeatherData}>
            <Search size={15} className="search" />
          </span>
        </WeatherSearch>
      );
    } else {
      return (
        <button onClick={() => setClicked(true)}>
          <LocateIcon size={10} /> CHANGE LOCATION
        </button>
      );
    }
  }

  return (
    <WeatherContainer>
      <WeatherCurrent>
        {/* Top Part Current Forecast*/}
        <WeatherInformation>
          {status}
          <h1>
            {temperature}
            <b>°C°F</b>
          </h1>
        </WeatherInformation>

        <WeatherStatus>
          <h1>Weather</h1>
          <p>{time}</p>
          <p>{weather}</p>
          <p>{gps}</p>
        </WeatherStatus>
      </WeatherCurrent>
      <WeatherButtons>
        {/* <button>
          <LocateIcon size={15} /> CHANGE LOCATION
        </button> */}
        {handleClick()}
        <button onClick={getWeatherData}>
          <RefreshCcw size={15} />
          REFRESH
        </button>
      </WeatherButtons>
    </WeatherContainer>
  );
};

export default Weather;
