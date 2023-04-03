import { HomeTop } from '../../styles/home/Home.styled';
import Pomodoro from '../pomodoro/Pomodoro';
import Weather from '../weather/Weather';

const HomeView = () => {
  return (
    <HomeTop>
      <Weather />
      <Pomodoro />
    </HomeTop>
  );
};

export default HomeView;
